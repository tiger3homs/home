import { useState, useMemo, useCallback, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { Github, Facebook, Mail, Instagram } from 'lucide-react';
import emailjs from 'emailjs-com';
import { onAuthStateChanged, User } from 'firebase/auth'; // Import Firebase auth types
import { auth } from './firebaseConfig'; // Import Firebase auth instance
import { translations as defaultTranslations } from './translations';
import LoginPage from './admin/LoginPage';
import AdminDashboard from './admin/AdminDashboard';
import { getProjectsData as defaultGetProjectsData } from './components/ProjectsSectionData';
import Logo from './components/Logo';

// Lazy load components for better initial load performance
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

type TranslationsType = typeof defaultTranslations;
type Language = keyof TranslationsType;

// Secure Protected Route Component using Firebase Auth State
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    // Optional: Show a loading spinner while checking auth state
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div></div>;
  }

  if (!user) {
    // User is not logged in, redirect to login page
    return <Navigate to="/admin/login" replace />;
  }

  // User is logged in, render the protected component
  return children;
};


// Main Site Layout Component (extracted from original App)
const MainSite = () => {
  // State for current language
  const [lang, setLang] = useState<Language>('en');
  // State to hold the active translations (from localStorage or defaults)
  const [siteTranslations, setSiteTranslations] = useState<TranslationsType>(() => {
      const saved = localStorage.getItem('siteTranslations');
      try {
          return saved ? JSON.parse(saved) : defaultTranslations;
      } catch (e) {
          console.error("Failed to parse translations from localStorage on main site", e);
          return defaultTranslations;
      }
  });

  // Update translations if localStorage changes (e.g., after saving in admin)
  // This requires a manual refresh or more complex state management (like Context API)
  // for real-time updates without refresh. For now, it loads on initial mount.
  useEffect(() => {
      const handleStorageChange = () => {
          const saved = localStorage.getItem('siteTranslations');
           try {
              setSiteTranslations(saved ? JSON.parse(saved) : defaultTranslations);
          } catch (e) {
              console.error("Failed to parse translations from localStorage on storage event", e);
              setSiteTranslations(defaultTranslations); // Fallback on error
          }
      };

      window.addEventListener('storage', handleStorageChange);
      // Initial load check in case storage changed before listener attached
      handleStorageChange();

      return () => {
          window.removeEventListener('storage', handleStorageChange);
      };
  }, []);


  // Memoized translation object for the current language
  const t = useMemo(() => siteTranslations[lang], [lang, siteTranslations]);
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send('service_bdj14o3', 'template_2e2nikq', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'tiger3homs@gmail.com',
        name: formData.name,
        email: formData.email,
      }, 'UBLU57PsLej7OB6PR')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('Failed to send message. Please try again.');
      });
  }, [formData]);

  const handleLangChange = useCallback((language: Language) => {
    setLang(language);
  }, []);

  // Use the active translations for project data
  const projectsData = useMemo(() => defaultGetProjectsData(lang, siteTranslations), [lang, siteTranslations]);

  const LoadingFallback = <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language switcher remains visible on the main site */}
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => handleLangChange('en')} 
          className={`px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          EN
        </button>
        <button 
          onClick={() => handleLangChange('sv')} 
          className={`px-2 py-1 rounded transition-colors ${lang === 'sv' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
        >
          SV
        </button>
        <button 
          onClick={() => handleLangChange('ar')} 
          className={`px-2 py-1 rounded transition-colors ${lang === 'ar' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'} font-arabic`}
        >
          ع
        </button>
      </div>

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
        {/* Add Admin Link */}
        <div className="mt-4">
          <Link to="/admin/dashboard" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
            Admin Dashboard
          </Link>
        </div>
      </footer>
    </div>
  );
};

// Component to handle the redirect logic from 404.html
const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirect');
    if (redirectPath) {
      sessionStorage.removeItem('redirect');
      // Adjust the path based on the basename.
      // The path from sessionStorage includes the basename (e.g., /home/admin/login)
      // We need to remove the basename before passing it to navigate()
      const basename = import.meta.env.PROD ? '/home' : '/';
      const relativePath = redirectPath.startsWith(basename) 
        ? redirectPath.substring(basename.length -1) // Keep leading slash if basename is '/'
        : redirectPath;

      // Ensure relativePath starts with a '/' if it's not empty
      const navigateTo = (relativePath === '' || relativePath === '/') ? '/' : (relativePath.startsWith('/') ? relativePath : '/' + relativePath);
      
      console.log(`Redirecting from sessionStorage: ${redirectPath} to ${navigateTo}`); // Debug log
      navigate(navigateTo, { replace: true });
    }
  }, [navigate]); // Dependency array includes navigate

  return null; // This component doesn't render anything
};


// Main App component with Router
function App() {
  // Set basename conditionally based on environment
  // Use '/home' for production builds (GitHub Pages), '/' for development
  const basename = import.meta.env.PROD ? '/home' : '/';

  return (
    <BrowserRouter basename={basename}>
      {/* Add the RedirectHandler inside the Router */}
      <RedirectHandler /> 
      <Routes>
        {/* Routes now work correctly in both dev and prod */}
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
        {/* Optional: Redirect /admin to login if not authenticated, or dashboard if authenticated */}
        {/* This could also be handled within ProtectedRoute or LoginPage logic */}
         <Route path="/admin" element={<Navigate to="/admin/login" replace />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
