import React from 'react';
import Link from 'next/link';

const SignUpForm = () => {
  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, #FF6FB0 0%, #824058 100%)',
      }}
      className="min-h-screen flex items-center justify-center p-4 font-sans"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6FB0] rounded-full -mr-16 -mt-16 opacity-30 blur-lg"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#824058] rounded-full -ml-16 -mb-16 opacity-30 blur-lg"></div>

        {/* Contenido principal */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-[#824058] mb-2">¡Regístrate!</h1>
          <p className="text-center text-[#FF6FB0] text-sm mb-8">Únete a la comunidad hoy mismo</p>

          {/* Botón de Google */}
          <button className="w-full mb-6 flex items-center justify-center gap-2 bg-white border border-[#FF6FB0] rounded-lg p-3 text-[#824058] hover:bg-[#FF6FB0] hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 488 512">
              <path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
            </svg>
            Usar cuenta de Google
          </button>

          {/* Separador */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#FF6FB0]"></div>
            <span className="text-sm text-[#824058]">o</span>
            <div className="flex-1 h-px bg-[#FF6FB0]"></div>
          </div>

          {/* Campos del formulario */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-[#824058] mb-1">Nombre completo</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] placeholder:text-[#FF6FB0] text-[#824058]"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">Edad</label>
              <input 
                type="number" 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] placeholder:text-[#FF6FB0] text-[#824058]"
                placeholder="30"
                min="18"
              />
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">País</label>
              <select 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] bg-white placeholder:text-[#FF6FB0] text-[#824058]"
              >
                <option value="">Selecciona tu país</option>
                <option value="CO">Perú</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="ES">Colombia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">Teléfono</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] placeholder:text-[#FF6FB0] text-[#824058]"
                placeholder="+51 987 654 321"
              />
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">¿Es padre primerizo?</label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="primerizo" 
                    className="text-[#824058] focus:ring-[#824058]"
                  />
                  <span className="ml-2 text-sm text-[#824058]">Sí</span>
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="primerizo" 
                    className="text-[#824058] focus:ring-[#824058]"
                  />
                  <span className="ml-2 text-sm text-[#824058]">No</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] placeholder:text-[#FF6FB0] text-[#824058]"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm text-[#824058] mb-1">Crear contraseña</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 border border-[#FF6FB0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#824058] placeholder:text-[#FF6FB0] text-[#824058]"
                placeholder="********"
              />
            </div>
          </form>

          {/* Botón de registro */}
          <button className="w-full bg-[#824058] text-white rounded-lg py-3 mt-6 hover:bg-[#FF6FB0] transition-all duration-300">
            Registrarse
          </button>

          {/* Enlace para iniciar sesión */}
          <p className="text-center text-sm text-[#FF6FB0] mt-4">
            ¿Ya eres miembro?{' '}
            <Link href="/login" className="text-[#824058] hover:text-[#FF6FB0] transition-colors duration-300">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;