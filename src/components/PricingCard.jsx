import { FiCheck, FiStar } from 'react-icons/fi';

export default function PricingCard({ plan, price, features, popular = false, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className={`relative rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 ${
        popular
          ? 'bg-gradient-to-b from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl shadow-indigo-500/25 scale-105'
          : 'bg-gray-800/50 backdrop-blur-sm text-white shadow-xl hover:shadow-2xl border border-gray-700'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
            <FiStar className="w-4 h-4" />
            En Popüler
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-2">{plan}</h3>
        <p className={`text-lg ${popular ? 'text-indigo-100' : 'text-gray-300'}`}>
         {plan.toLowerCase()} özellikleri.
        </p>
      </div>

      {/* Price */}
      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-6xl font-bold">₺{price}</span>
          <span className={`text-xl ${popular ? 'text-indigo-100' : 'text-gray-400'}`}>/ay</span>
        </div>
        <p className={`text-sm mt-2 ${popular ? 'text-indigo-200' : 'text-gray-400'}`}>
          Yıllık faturalandırma veya Aylık ödeme
        </p>
      </div>

      {/* CTA Button */}
      <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 mb-8 shadow-lg ${
        popular
          ? 'bg-white text-indigo-600 hover:bg-indigo-50 hover:shadow-xl transform hover:scale-105'
          : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/25'
      }`}>
        {popular ? 'Ücretsiz Deneme' : 'Planı Seç'}
      </button>

      {/* Features */}
      <div className="space-y-4">
        <h4 className={`font-semibold text-lg mb-4 ${popular ? 'text-indigo-100' : 'text-gray-200'}`}>
          Dahil Edilenler:
        </h4>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                popular ? 'bg-white/20' : 'bg-green-500/20'
              }`}>
                <FiCheck className={`w-4 h-4 ${popular ? 'text-white' : 'text-green-400'}`} />
              </div>
              <span className={`text-base leading-relaxed ${popular ? 'text-indigo-50' : 'text-gray-300'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
        popular
          ? 'bg-gradient-to-b from-white/10 to-transparent opacity-0 hover:opacity-100'
          : 'bg-gradient-to-b from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100'
      }`}></div>
    </div>
  )
}