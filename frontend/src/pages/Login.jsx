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
    <div className="h-screen flex overflow-hidden">
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
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col h-screen">
        {/* Mobile Background - visible only on small screens */}
        <div 
          className="lg:hidden absolute inset-0 opacity-20 -z-10"
          style={{
            backgroundImage: 'url(/images/shutterstock_2302249727.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* White Horizontal Bar at Top with Logo - Minimal height */}
        <div className="w-full bg-white px-4 md:px-8 shadow-md flex items-center justify-end py-1">
          <img 
            src="/images/allcom_nuevo_logo.png" 
            alt="ALLCOM" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Content Container - Centered vertically, compact spacing */}
        <div className="flex-1 flex items-center justify-center lg:justify-end px-4 md:px-8 lg:px-12 py-4 overflow-y-auto">
          <div className="w-full max-w-sm space-y-3 md:space-y-4">
            {/* Slogan - Aligned Right on desktop, center on mobile */}
            <div className="text-center lg:text-right">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-1">
                Tecnología para tiendas...
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-600 leading-tight mb-2">
                sin enredos
              </h2>
              
              {/* Hashtags - Responsive */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center lg:justify-end text-xs md:text-sm text-emerald-700 font-medium mt-2">
                <span className="hover:text-emerald-800 transition-colors">#autoservicio</span>
                <span className="hover:text-emerald-800 transition-colors">#puntosdeventa</span>
                <span className="hover:text-emerald-800 transition-colors">#inteligenciaartificial</span>
                <span className="hover:text-emerald-800 transition-colors">#serviciotecnico</span>
                <span className="hover:text-emerald-800 transition-colors">#kioscos</span>
              </div>
            </div>

            {/* Login Box - Responsive, centered on mobile */}
            <div className="bg-white/40 backdrop-blur-lg rounded-xl shadow-xl p-4 md:p-5 border border-white/60 w-full max-w-xs mx-auto lg:ml-auto lg:mr-0">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="password" className="block text-xs md:text-sm font-semibold text-gray-800 mb-1.5">
                    Código de Log-in:
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 bg-white/95 border-2 border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none text-gray-800 placeholder-gray-400 font-medium text-sm"
                    placeholder="••••"
                    autoFocus
                  />
                  {error && (
                    <p className="mt-1.5 text-xs text-red-600 font-semibold">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-sm"
                >
                  Ingresar
                </button>
              </form>
            </div>

            {/* AI Message Section - Responsive */}
            <div className="w-full max-w-xs mx-auto lg:ml-auto lg:mr-0">
              <div 
                className="p-[2px] rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${currentColor} 0%, ${currentColor}DD 100%)`
                }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    {/* Animated Icon */}
                    <div className="relative flex-shrink-0">
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-50 animate-pulse"
                        style={{ backgroundColor: currentColor }}
                      ></div>
                      <div 
                        className="relative p-2 rounded-full"
                        style={{ backgroundColor: currentColor }}
                      >
                        <CurrentIcon className="w-4 h-4 md:w-5 md:h-5 text-white animate-bounce" />
                      </div>
                    </div>
                    
                    {/* Message Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight animate-fadeIn">
                        {aiMessages[currentMessage].text}
                      </p>
                    </div>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="flex gap-1 md:gap-1.5 mt-2 justify-center">
                    {aiMessages.map((_, index) => (
                      <div
                        key={index}
                        className="h-1 md:h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: index === currentMessage ? '24px' : '4px',
                          backgroundColor: index === currentMessage ? currentColor : '#D1D5DB'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-center text-[10px] md:text-xs text-gray-600 mt-2 font-medium">
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
