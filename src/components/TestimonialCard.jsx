import { FiStar, FiMessageSquare } from 'react-icons/fi';

export default function TestimonialCard({ quote, author, role, rating, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 border border-gray-700 hover:border-indigo-400 relative overflow-hidden"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <FiMessageSquare className="w-12 h-12 text-indigo-400" />
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-500'
            } transition-colors duration-300`}
          />
        ))}
        <span className="ml-2 text-sm text-gray-400 font-medium">{rating}.0</span>
      </div>

      {/* Quote */}
      <blockquote className="text-xl text-gray-200 mb-8 leading-relaxed font-medium relative">
        <span className="text-indigo-400 text-4xl font-serif absolute -top-2 -left-2">"</span>
        {quote}
        <span className="text-indigo-400 text-4xl font-serif absolute -bottom-4 -right-2">"</span>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-white text-lg group-hover:text-indigo-300 transition-colors duration-300">
            {author}
          </p>
          <p className="text-sm text-gray-400 font-medium">{role}</p>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  )
}