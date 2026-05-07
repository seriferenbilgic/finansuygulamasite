import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight, FiSettings, FiUserCheck } from 'react-icons/fi';

export default function Login({ onLogin, onRegister, account }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegister, setIsRegister] = useState(!account);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hasAccount = Boolean(account);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      if (isRegister) {
        if (hasAccount) {
          setStatus('already-account');
          setIsRegister(false);
          return;
        }

        onRegister?.({
          name: formData.name || formData.email.split('@')[0],
          email: formData.email,
          password: formData.password,
        });
        setStatus('registered');
        setIsRegister(false);
        setFormData((prev) => ({ ...prev, password: '' }));
        return;
      }

      if (!account) {
        setStatus('no-account');
        setIsRegister(true);
        return;
      }

      const success = onLogin?.({
        email: formData.email,
        password: formData.password,
      });

      if (success) {
        setStatus('success');
        navigate('/', { state: { loginSuccess: true } });
        return;
      }

      setStatus('invalid');
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = isRegister ? 'Hesap Oluştur' : 'Giriş Yap';
  const subtitle = isRegister
    ? 'Yeni bir hesap açarak finans yönetimine başlayın.'
    : 'Hesabınıza giriş yaparak tüm finansal araçlara ve raporlara erişin.';

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 mt-6 mb-6 shadow-xl">
            <FiLock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-gradient-to-br from-indigo-800 via-purple-700 to-fuchsia-700 p-10 text-white">
              <h2 className="text-3xl font-bold mb-4">Hoş Geldiniz</h2>
              <p className="text-gray-100/90 leading-relaxed">
                Hesabınızı kullanarak bütçe yönetimini anında özelleştirin. Hızlı, güvenli ve şık bir deneyim sizi bekliyor.
              </p>
              <div className="mt-10 space-y-4 text-gray-100/90">
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5" />
                  <span>E-posta ile hızlı giriş yapın</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiLock className="w-5 h-5" />
                  <span>Güvenli şifreleme.</span>
                </div>
                  <div className="flex items-center gap-3">
                  <FiSettings className="w-5 h-5" />
                  <span>Tamamen kişiselleştirilebir panel.</span>
                </div>
                                <div className="flex items-center gap-3">
                  <FiUserCheck className="w-5 h-5" />
                  <span>Şeffaf hesap kontrolü.</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'success' && (
                  <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500 text-indigo-200 px-4 py-3">
                    Giriş başarıyla sağlandı.
                  </div>
                )}
                {status === 'registered' && (
                  <div className="rounded-2xl bg-indigo-500/10 border border-indigo-500 text-indigo-200 px-4 py-3">
                    Hesabınız oluşturuldu. Şimdi giriş yapabilirsiniz.
                  </div>
                )}
                {status === 'already-account' && (
                  <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500 text-yellow-200 px-4 py-3">
                    Hesabınız zaten mevcut. Lütfen doğrudan giriş yapın.
                  </div>
                )}
                {status === 'no-account' && (
                  <div className="rounded-2xl bg-red-500/10 border border-red-500 text-red-200 px-4 py-3">
                    Hesabınız bulunamadı. Lütfen önce hesap oluşturun.
                  </div>
                )}
                {status === 'invalid' && (
                  <div className="rounded-2xl bg-red-500/10 border border-red-500 text-red-200 px-4 py-3">
                    E-posta veya şifre hatalı. Tekrar deneyin.
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-2xl bg-red-500/10 border border-red-500 text-red-200 px-4 py-3">
                    Bir hata oluştu. Lütfen tekrar deneyin.
                  </div>
                )}

                {isRegister && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Adınız</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-gray-700 bg-slate-900 px-4 py-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                      placeholder="Adınızı girin"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">E-posta adresi</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-gray-700 bg-slate-900 px-4 py-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="email@ornek.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Şifre</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full rounded-3xl border border-gray-700 bg-slate-900 px-4 py-4 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    placeholder="Şifrenizi girin"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 text-lg font-semibold text-white transition hover:from-indigo-600 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (isRegister ? 'Lütfen bekleyiniz.' : 'Giriş yapılıyor.') : title}
                  <FiArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-400">
                {isRegister ? (
                  <>
                    Zaten hesabınız var?{' '}
                    <button
                      onClick={() => {
                        setIsRegister(false);
                        setStatus(null);
                      }}
                      className="text-indigo-300 hover:text-indigo-200 font-semibold"
                    >
                      Giriş Yap
                    </button>
                  </>
                ) : hasAccount ? (
                  <div className="text-gray-300">
                    Böyle bir hesap bulunuyor. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
                  </div>
                ) : (
                  <>
                    Hesabınız yok mu?{' '}
                    <button
                      onClick={() => {
                        setIsRegister(true);
                        setStatus(null);
                      }}
                      className="text-indigo-300 hover:text-indigo-200 font-semibold"
                    >
                      Hesap Oluştur
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
