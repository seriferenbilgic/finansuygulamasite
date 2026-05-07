import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiLogOut } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import LogoIcon from './LogoIcon';

export default function Navbar({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Anasayfa', action: () => scrollToSection('hero') },
    { name: 'Özellikler', action: () => scrollToSection('features') },
    { name: 'Fiyatlandırma', action: () => scrollToSection('pricing') },
    { name: 'Yorumlar', action: () => scrollToSection('testimonials') },
    { name: 'İletişim', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' : 'bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-gray-800'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <LogoIcon className="group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Bupara
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-indigo-300 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-gray-300 hover:text-indigo-300 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-gray-300 font-medium transition-colors duration-200 hover:text-white"
                >
                  {user.name}
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-3xl bg-gray-900/95 border border-white/10 shadow-2xl py-2">
                    <button
                      onClick={() => {
                        onLogout();
                        setIsUserMenuOpen(false);
                        navigate('/', { replace: true, state: { showHeroAnimation: true } });
                      }}
                      className="w-full flex items-center gap-2 text-left px-4 py-3 text-gray-200 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <FiLogOut className="w-5 h-5 text-red-400" />
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors duration-200">
                  Giriş Yap
                </Link>
                <Link to="/login" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Ücretsiz İndir
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-white"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-indigo-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="text-left text-gray-300 hover:text-indigo-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200"
                  >
                    {item.name}
                  </button>
                )
              ))}

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700">
                {user ? (
                  <>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-gray-900/80 p-4">
                      <span className="text-gray-200 font-medium">{user.name}</span>
                      <FiChevronDown className="w-4 h-4 text-gray-200" />
                    </div>
                    <button
                      onClick={() => {
                        onLogout();
                        setIsOpen(false);
                        navigate('/', { replace: true, state: { showHeroAnimation: true } });
                      }}
                      className="bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl transition-all duration-300 font-semibold shadow-lg flex items-center justify-center gap-2"
                    >
                      <FiLogOut className="w-5 h-5" />
                      Çıkış Yap
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-indigo-300 hover:text-indigo-200 font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-left"
                      onClick={() => setIsOpen(false)}
                    >
                      Giriş Yap
                    </Link>
                    <Link
                      to="/login"
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 font-semibold shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Kayıt Ol
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
