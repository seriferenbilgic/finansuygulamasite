import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 hover:bg-gray-700/50 transition-colors duration-200 group"
      >
        <h3 className="text-xl font-bold text-left text-white group-hover:text-indigo-300 transition-colors duration-200 pr-4">
          {question}
        </h3>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-indigo-500/20 text-indigo-300 rotate-180'
            : 'bg-gray-700/50 text-gray-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300'
        }`}>
          <FiChevronDown className="w-5 h-5 transition-transform duration-300" />
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 pb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-6"></div>
          <p className="text-gray-300 leading-relaxed text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}