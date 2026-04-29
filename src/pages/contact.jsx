import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Bize Yazın",
      content: "destek@bupara.com",
      description: "Bize her zaman e-posta gönderebilirsiniz"
    },
    {
      icon: FiPhone,
      title: "Bizi Arayın",
      content: "+90 (555) 123-4567",
      description: "Pzt-Cum 09.00-18.00 GMT+3"
    },
    {
      icon: FiMapPin,
      title: "Bizi Ziyaret Edin",
      content: "İstanbul, Türkiye 34000",
      description: "Ofisimizde selam verin"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 pt-20 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-24 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6">
            <FiMail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-300 to-purple-300 bg-clip-text text-transparent mb-6">
           İletişime Geçin
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bupara hakkında sorularınız mı var? Size yardımcı olmak için buradayız.
            Bizimle iletişime geçin ve en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/10"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-gray-300 font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white" data-aos="fade-up">
              <h3 className="text-lg font-bold mb-2">Nede Bupara?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                 7/24 Destek Ekibi 
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                 Ortalama Dönüş Süresi: 1 Saat
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="w-4 h-4" />
                  99.9% Aktiflik Garantisi
                                  </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10" data-aos="fade-left">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">Bize Bir Mesaj Gönderin</h2>
                <p className="text-gray-300">Aşağıdaki formu doldurun ve 24 saat içinde size dönüş yapacağız.</p>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <FiCheck className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-medium">Mesaj başarıyla gönderildi. En kısa sürede dönüş yapacağız.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                  <FiAlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 font-medium">Bir şeyler yanlış gitti. Lütfen daha sonra tekrar deneyin.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Tam İsim</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-800 focus:bg-slate-900 text-white placeholder-gray-500"
                      placeholder="Şerif Eren Bilgiç"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">E-posta Adresi</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-800 focus:bg-slate-900 text-white placeholder-gray-500"
                      placeholder="serif@ornek.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Konu</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-800 focus:bg-slate-900 text-white placeholder-gray-500"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Mesaj</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-800 focus:bg-slate-900 text-white placeholder-gray-500 resize-none"
                    placeholder="Bize daha fazla bilgi verin..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-white-900 mb-4">Hızlı Yanıtlar mı Gerekiyor?</h3>
          <p className="text-gray-600 mb-8">Sıkça sorulan soruları inceleyin veya belgelerimizi gözden geçirin.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              SSS'yi Görüntüle
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
              Belgeler
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
