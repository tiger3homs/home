import React, { useState, useMemo, useCallback, lazy, Suspense, useEffect } from 'react'; // Import React
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Github, Facebook, Mail, Instagram, Linkedin, Twitter, Icon as LucideIcon } from 'lucide-react'; // Added more icons
import emailjs from 'emailjs-com';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc, collection, getDocs, query, orderBy } from 'firebase/firestore'; // Import Firestore functions
import { auth, db } from './firebaseConfig'; // Import db
import { translations as defaultTranslations } from './translations';
import LoginPage from './admin/LoginPage';
import AdminDashboard from './admin/AdminDashboard';
import { getProjectsData as defaultGetProjectsData } from './components/ProjectsSectionData';
import Logo from './components/Logo';

const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

const RATE_LIMIT_DURATION = 60000;
let lastSubmissionTime = 0;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 1000;
};

// Define the structure for social links fetched from Firestore
interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Name of the icon (e.g., "Github", "Mail")
  order: number; // Added for ordering
}

// Map icon names to Lucide components
const iconComponents: { [key: string]: React.ComponentType<{ size?: number | string }> } = {
  Github,
  Facebook,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  // Add more icons here as needed
};

type TranslationsType = typeof defaultTranslations;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

const MainSite = () => {
  const [siteTranslations, setSiteTranslations] = useState<TranslationsType>(() => {
    const saved = localStorage.getItem('siteTranslations');
    try {
      return saved ? JSON.parse(saved) : defaultTranslations;
    } catch (e) {
      console.error("Failed to parse translations from localStorage on main site", e);
      return defaultTranslations;
    }
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('siteTranslations');
      try {
        setSiteTranslations(saved ? JSON.parse(saved) : defaultTranslations);
      } catch (e) {
        console.error("Failed to parse translations from localStorage on storage event", e);
        setSiteTranslations(defaultTranslations);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const t = useMemo(() => siteTranslations.en, [siteTranslations]);

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_DURATION) {
      alert('Please wait a minute before sending another message.');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validateMessage(formData.message)) {
      alert('Message must be between 10 and 1000 characters.');
      return;
    }

    lastSubmissionTime = now;

    try {
      emailjs.init("skwn_-DYfDakGK644");
      
      await emailjs.send(
        "service_bdj14o3",
        "template_2e2nikq",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: 'tiger3homs@gmail.com',
        }
      );

      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  }, [formData]);

  // Fetch social links from Firestore
  useEffect(() => {
    const fetchSocialLinks = async () => {
      if (!db) return;
      try {
        const linksCollection = collection(db, 'socialLinks');
        const q = query(linksCollection, orderBy('order', 'asc')); // Order by the 'order' field
        const querySnapshot = await getDocs(q);
        const links = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SocialLink));
        setSocialLinks(links);
      } catch (error) {
        console.error("Error fetching social links:", error);
        // Optionally set default links or show an error
      }
    };

    fetchSocialLinks();
  }, []);


  const projectsData = useMemo(() => defaultGetProjectsData(siteTranslations), [siteTranslations]);

  const LoadingFallback = <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ltr`}>
      <header className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Logo logoUrl={t.generalInfo.logoUrl} />
          {/* Use text-primary for the main title */}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-primary" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {t.generalInfo.siteTitle}
          </h1>
          {/* Use text-secondary or a lighter gray for subtitle? Let's try text-secondary */}
          <p 
            className="text-xl md:text-2xl text-secondary mb-8" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {t.generalInfo.siteRole}
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => {
              const IconComponent = iconComponents[link.icon];
              return IconComponent ? (
                <a 
                  key={link.id} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  // Use text-secondary for base, hover:text-primary for social links
                  className="text-secondary hover:text-primary transition-colors transform hover:scale-110"
                >
                  <IconComponent size={24} />
                </a>
              ) : null; // Render nothing if icon name is not found
            })}
          </div>
        </div>
      </header>

      <Suspense fallback={LoadingFallback}>
        <ProjectsSection 
          title={projectsData.title} 
          projects={projectsData.projects} 
        />
      </Suspense>

      <section className="container mx-auto px-4 py-16 bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          {/* Use text-primary for the About title */}
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">{t.about.title}</h2>
          {/* Use text-secondary or a lighter gray for About text */}
          <p className="text-secondary text-lg leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      <Suspense fallback={LoadingFallback}>
        <ServicesSection 
          title={t.services.title} 
          services={t.services.list} 
        />
      </Suspense>

      <Suspense fallback={LoadingFallback}>
        <ContactSection
          t={t.contact}
          handleSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      </Suspense>

      {/* Use text-secondary for footer text */}
      <footer className="container mx-auto px-4 py-8 text-center text-secondary">
        <p>{t.generalInfo.footerText}</p>
        <div className="mt-4">
          {/* Use text-secondary and hover:text-primary for footer link */}
          <Link to="/admin/dashboard" className="text-sm text-secondary hover:text-primary transition-colors">
            Admin Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
};

// Define the structure for style data fetched from Firestore
interface StyleData {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

function App() {
  const basename = '/home/';

  // Removed the redundant useEffect hook that loaded styles here.
  // Re-add Effect to load and apply global styles from Firestore on initial App load
  useEffect(() => {
    const loadAndApplyStyles = async () => {
      if (!db) {
        console.error("App.tsx: Firestore not initialized correctly for loading styles.");
        return; // Exit if db is not available
      }
      const stylesDocRef = doc(db, 'settings', 'styles');
      try {
        console.log("App.tsx: Attempting to load global styles...");
        const docSnap = await getDoc(stylesDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as StyleData;
          // Apply fetched styles to the root element
          document.documentElement.style.setProperty('--primary-color', data.primaryColor);
          document.documentElement.style.setProperty('--secondary-color', data.secondaryColor);
          document.documentElement.style.setProperty('--font-family', data.fontFamily);
          console.log('App.tsx: Global styles applied from Firestore:', data);
        } else {
          // Styles not found in Firestore, defaults from index.css will be used.
          console.log("App.tsx: No global styles document found in Firestore, using CSS defaults.");
        }
      } catch (error) {
        console.error("App.tsx: Error loading global styles from Firestore:", error);
        // Fallback to CSS defaults in case of error
      }
    };

    loadAndApplyStyles();
  }, []); // Empty dependency array ensures this runs only once on App mount

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
