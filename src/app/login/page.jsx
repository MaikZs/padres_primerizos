import React from 'react';
import Link from 'next/link'; // Importa el componente Link de Next.js

const LoginForm = () => {
  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, #FF6FB0 0%, #824058 100%)',
      }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6FB0] rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#824058] rounded-full -ml-16 -mb-16 opacity-50"></div>
        
        {/* Form content */}
        <div className="relative z-10">
          <h1 className="text-2xl font-semibold text-center text-[#824058] mb-1">Inicia Sesión</h1>
          <p className="text-center text-[#FF6FB0] text-sm mb-6">Bienvenido de nuevo!</p>
          
          {/* Google Login Button */}
          <button className="w-full mb-4 flex items-center justify-center gap-2 bg-white border border-[#FF6FB0] rounded-lg p-2 text-[#824058] hover:bg-[#FF6FB0] hover:text-white transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Inicia con Google
          </button>
          
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-[#FF6FB0]"></div>
            <span className="text-sm text-[#824058]">or</span>
            <div className="flex-1 h-px bg-[#FF6FB0]"></div>
          </div>
          
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm text-[#824058] mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058]"
              placeholder="pozingis.laimonas@gmail.com"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-sm text-[#824058] mb-1">Contraseña</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058]"
              placeholder="********"
            />
          </div>
          
          {/* Login Button */}
          <button className="w-full bg-[#824058] text-white rounded-lg py-2 hover:bg-[#FF6FB0] transition-colors mb-4">
            Iniciar sesión
          </button>
          
          {/* Additional Links */}
          <div className="text-center space-y-2">
            <p className="text-sm text-[#FF6FB0]">
              <Link href="/forgot-password" className="hover:text-[#824058]">
                ¿Olvidaste tu contraseña?
              </Link>
            </p>
            <p className="text-sm text-[#FF6FB0]">
              ¿Aún no tienes una cuenta?{' '}
              <Link href="/login/registro" className="text-[#824058] hover:text-[#FF6FB0]">
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;