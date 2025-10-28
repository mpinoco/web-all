import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === '4227') {
      localStorage.setItem('isAuthenticated', 'true');
      onLogin();
    } else {
      setError('Contraseña incorrecta');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-end px-8 md:px-16 lg:px-24"
      style={{
        backgroundImage: 'url(/images/shutterstock_2302249727.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Login Box - Right side */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-10">
        {/* Text */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-tight">
          Tecnología para tiendas sin enredos
        </h1>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
              placeholder="Ingrese la contraseña"
              autoFocus
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
