import { useState, useMemo, useCallback, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { Github, Facebook, Mail, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebaseConfig';
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

  const projectsData = useMemo(() => defaultGetProjectsData(siteTranslations), [siteTranslations]);

  const LoadingFallback = <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ltr`}>
      <header className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Logo />
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {t.title}
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 mb-8" 
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            {t.role}
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/tiger3homs" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="mailto:tiger3homs@gmail.com" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://facebook.com/tiger3homs" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/obajda.s" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </a>
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
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{t.about.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
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

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>{t.footer}</p>
        <div className="mt-4">
          <Link to="/admin/dashboard" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
            Admin Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
};

function App() {
  const basename = '/home/';

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