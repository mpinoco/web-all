import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Cpu, RefreshCw, Rocket, Brain } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentMessage, setCurrentMessage] = useState(0);

  const aiMessages = [
    { icon: Brain, text: "Integrando IA en cada solución", color: "#285490", borderColor: "border-[#285490]" },
    { icon: Rocket, text: "Modernizando el retail chileno", color: "#557D9A", borderColor: "border-[#557D9A]" },
    { icon: Sparkles, text: "Innovación tecnológica en desarrollo", color: "#7B9AA5", borderColor: "border-[#7B9AA5]" },
    { icon: Cpu, text: "Experiencia + IA = Futuro del retail", color: "#9AB290", borderColor: "border-[#9AB290]" },
    { icon: Zap, text: "Nueva web: Más potente, más inteligente", color: "#C8D69C", borderColor: "border-[#C8D69C]" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % aiMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === '4227') {
      sessionStorage.setItem('isAuthenticated', 'true');
      onLogin();
    } else {
      setError('Código incorrecto');
      setTimeout(() => setError(''), 2000);
    }
  };

  const CurrentIcon = aiMessages[currentMessage].icon;
  const currentColor = aiMessages[currentMessage].color;

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Side - Background Image with Overlay */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative"
        style={{
          backgroundImage: 'url(/images/shutterstock_2302249727.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>

      {/* Right Side - Logo Bar, Slogan and Login Box */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col relative overflow-y-auto">
        {/* Mobile Background - visible only on small screens */}
        <div 
          className="lg:hidden absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/shutterstock_2302249727.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* White Horizontal Bar at Top with Logo - Height reduced by half */}
        <div className="w-full bg-white py-0.5 px-8 shadow-md relative z-10">
          <div className="flex justify-end max-w-4xl ml-auto">
            <img 
              src="/images/allcom_logo_new.png" 
              alt="ALLCOM" 
              className="h-28 md:h-32 w-auto"
            />
          </div>
        </div>

        {/* Content Container - Centered vertically in remaining space */}
        <div className="flex-1 flex items-center justify-end px-6 md:px-12 lg:px-16 py-8 relative z-10">
          <div className="w-full max-w-md space-y-6">
            {/* Slogan - Aligned Right, Two Lines */}
            <div className="text-right mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-1">
                Tecnología para tiendas...
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 leading-tight mb-3">
                sin enredos
              </h2>
              
              {/* Hashtags */}
              <div className="flex flex-wrap gap-2 justify-end text-sm md:text-base text-emerald-700 font-medium mt-4">
                <span className="hover:text-emerald-800 transition-colors">#autoservicio</span>
                <span className="hover:text-emerald-800 transition-colors">#puntosdeventa</span>
                <span className="hover:text-emerald-800 transition-colors">#inteligenciaartificial</span>
                <span className="hover:text-emerald-800 transition-colors">#serviciotecnico</span>
                <span className="hover:text-emerald-800 transition-colors">#kioscos</span>
              </div>
            </div>

            {/* Login Box - Smaller, more compact */}
            <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/60 w-72 ml-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-800 mb-2">
                    Código de Log-in:
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/95 border-2 border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-gray-800 placeholder-gray-400 font-medium"
                    placeholder="••••"
                    autoFocus
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-600 font-semibold">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Ingresar
                </button>
              </form>
            </div>

            {/* AI Message Section - Animated - 10% smaller */}
            <div className="ml-auto w-64 mt-6">
              <div 
                className={`p-[2px] rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105`}
                style={{ 
                  background: `linear-gradient(135deg, ${currentColor} 0%, ${currentColor}DD 100%)`
                }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3.5">
                  <div className="flex items-center gap-3">
                    {/* Animated Icon */}
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-50 animate-pulse"
                        style={{ backgroundColor: currentColor }}
                      ></div>
                      <div 
                        className="relative p-2.5 rounded-full"
                        style={{ backgroundColor: currentColor }}
                      >
                        <CurrentIcon className="w-5 h-5 text-white animate-bounce" />
                      </div>
                    </div>
                    
                    {/* Message Text */}
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-800 leading-tight animate-fadeIn">
                        {aiMessages[currentMessage].text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex gap-1.5 mt-2.5 justify-center">
                    {aiMessages.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300`}
                        style={{
                          width: index === currentMessage ? '32px' : '6px',
                          backgroundColor: index === currentMessage ? currentColor : '#D1D5DB'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-center text-xs text-gray-600 mt-3 font-medium">
                🚀 Próximamente: Nueva experiencia web potenciada con IA
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
