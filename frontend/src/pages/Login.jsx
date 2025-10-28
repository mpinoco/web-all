import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

        {/* White Horizontal Bar at Top with Logo */}
        <div className="w-full bg-white py-4 px-8 shadow-md relative z-10">
          <div className="flex justify-end max-w-4xl ml-auto">
            <img 
              src="/images/allcom_logo_new.png" 
              alt="ALLCOM" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>

        {/* Content Container - Centered vertically in remaining space */}
        <div className="flex-1 flex items-center justify-end px-6 md:px-12 lg:px-16 py-8 relative z-10">
          <div className="w-full max-w-md space-y-6">
            {/* Slogan - Aligned Right, Two Lines */}
            <div className="text-right mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-1">
                Tecnología para tiendas...
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-600 leading-tight">
                sin enredos
              </h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
