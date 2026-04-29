import { FiPlay, FiArrowRight, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';
import LogoIcon from './LogoIcon';

export default function HeroSection() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 pt-20 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div data-aos="fade-right" className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full text-indigo-300 font-medium text-sm border border-indigo-500/30 mt-3">
              <FiTrendingUp className="w-4 h-4 mr-2" />
              2026'daki #1 Numaralı Finans Uygulaması
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-tight">
              Paranızı
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Akıllıca Yönetin
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Harcamalarınızı takip edin, bakiyenizi görün, para transferi talep edin ve para gönderin — hepsi Bupara'da.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-sm text-gray-400">Aktif Kullanıcı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2M₺+</div>
              <div className="text-sm text-gray-400">İşlem</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9★</div>
              <div className="text-sm text-gray-400">Uygulama Puanı</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3">
              <FiZap className="w-5 h-5" />
              Ücretsiz Kaydol
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToFeatures}
              className="group border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-3"
            >
              <FiPlay className="w-5 h-5" />
              Demoyu İzle
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-6">
            <div className="flex items-center gap-2">
              <FiShield className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300 font-medium">Banka Kadar Güvenli</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">99.9% Aktif</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Preview */}
        <div className="relative">
          <div className="relative">
            <div className="w-full max-w-xl mx-auto overflow-hidden rounded-3xl">
              <img
                src="https://i.ibb.co/yc6w88fd/Gemini-Generated-mage-n4w1ysn4w1ysn4w1-Photoroom.png"
                alt="Bupara yönetim paneli"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}