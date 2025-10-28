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
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-8 relative"
      style={{
        backgroundImage: 'url(/images/shutterstock_2302249727.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Slogan - Outside the box, over the background */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 text-center leading-tight drop-shadow-2xl">
        Tecnología para tiendas sin enredos
      </h1>
      
      {/* Login Box - Small and transparent */}
      <div className="w-full max-w-xs bg-white/30 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/40">
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-white mb-2 drop-shadow-md">
              Código de Login
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 bg-white/90 border border-white/50 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all outline-none text-gray-800 placeholder-gray-500"
              placeholder="Ingrese el código"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-100 font-semibold drop-shadow-md">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600/90 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
