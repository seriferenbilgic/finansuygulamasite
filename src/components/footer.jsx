import { FiMail, FiPhone, FiMapPin, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

export default function Footer() {
  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = {
    product: [
      { name: 'Özellikler', href: '#features' },
      { name: 'Fiyatlandırma', href: '#pricing' },
      { name: 'Güvenlik', href: '#features' },
      { name: 'API Belgeleri', href: '#' }
    ],
    company: [
      { name: 'Hakkımızda', href: '#' },
      { name: 'Bizimle Çalışın', href: '#' },
      { name: 'Basın', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Destek Merkezi', href: '#' },
      { name: 'Bize Ulaşın', href: '/contact' },
      { name: 'Durum', href: '#' },
      { name: 'Topluluk', href: '#' }
    ],
    legal: [
      { name: 'Gizlilik Politikası', href: '#' },
      { name: 'Hizmet Koşulları', href: '#' },
      { name: 'Çerez Politikası', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <LogoIcon className="w-12 h-12 rounded-2xl group-hover:scale-110 transition-transform duration-300" />
              <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bupara
              </span>
            </Link>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              Ekonomik yaşamınızı kolaylaştırmak için tasarlanmış, kullanıcı dostu finans yönetimi uygulaması.
              Gelir ve giderlerinizi takip edin, bütçenizi yönetin ve finansal hedeflerinize ulaşın.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="w-5 h-5 text-indigo-400" />
                <span>destek@bupara.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="w-5 h-5 text-indigo-400" />
                <span>+90 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMapPin className="w-5 h-5 text-indigo-400" />
                <span>İstanbul, Türkiye 34000</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Uygulama</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Destek</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Güncellemelerden Haberdar Olun</h3>
            <p className="text-gray-300">Bupara'dan en son haberleri ve güncellemeleri alın</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold whitespace-nowrap">
              Abone Ol
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2026 Bupara. Tüm hakları saklıdır.</p>
              <p className="text-sm mt-1">Made with ❤️ by Şerif Eren Bilgiç</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
