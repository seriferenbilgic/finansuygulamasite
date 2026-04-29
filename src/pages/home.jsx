import HeroSection from "../components/HeroSection"
import StatsSection from "../components/StatsSection"
import FeatureCard from "../components/FeatureCard"
import PricingCard from "../components/PricingCard"
import TestimonialCard from "../components/TestimonialCard"
import FAQItem from "../components/FAQItem"

import { features } from "../data/features"
import { pricingPlans } from "../data/pricing"
import { testimonials } from "../data/testimonials"
import { faqs } from "../data/faqs"

export default function Home() {
  return (
    <div>
      <section id="hero">
        <HeroSection />
      </section>

      <StatsSection />

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-28 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Birikiminizi Kontrol Altına Alın
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             Güçlü özelliklerimizle harcamalarınızı takip edin, bütçenizi yönetin ve finansal hedeflerinize ulaşın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Esnek Fiyatlandırma Planları
            </h2>
            <p className="text-xl text-gray-300">
              Esnek seçenekler ve uygun fiyatlarla uygun bir plan seçin.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Kullanıcı Yorumları ve Geri Bildirimleri
            </h2>
            <p className="text-xl text-gray-300">
              Uygulamanın insanları harcamalarını takip etmelerine, düzenli kalmalarını ve akıllı finansal kararlar almalarini görün.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-0 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
             Sıkça Sorulan Sorular  
            </h2>
            <p className="text-xl text-gray-300">
              Aklınıza takılan sorulara hızlıca cevap bulun. Uygulamamız, güvenlik önlemlerimiz ve daha fazlası hakkında bilgi edinin.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
