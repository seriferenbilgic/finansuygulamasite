import { FiUsers, FiDownload, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function StatsSection() {
  const stats = [
    {
      icon: FiUsers,
      number: "1M+",
      label: "Dünya Çapında Aktif Kullanıcı",
      description: "Bupara ile finansal hayatlarını dönüştüren milyonlarca kullanıcı",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiDownload,
      number: "1.2M+",
      label: "İndirme",
      description: "iOS ve Androide uygun",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FiStar,
      number: "4.9",
      label: "Ortalama Puan",
      description: "Dünya genelinde güvenilen",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FiTrendingUp,
      number: "₺5M+",
      label: "7/24 Anlık Transfer",
      description: "Güvenli ve anlık transferler",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Dünya Çapında Güvenilir
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hızlıca büyüyen Bupara Dünyasına sende katıl!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              <div className="space-y-2">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-white font-semibold text-lg">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">99.9% Aktif</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Banka Kadar Güvenli</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm">7/24 Destek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}