export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 border border-gray-700 hover:border-indigo-400"
    >
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="text-white text-2xl" />
        </div>

        {/* Floating effect */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-300 leading-relaxed text-lg">
        {description}
      </p>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  )
}