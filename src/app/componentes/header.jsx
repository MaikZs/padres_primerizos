import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full px-8 py-6 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section */}
                <div className="flex space-x-6">
                    <a href="/src/app/page.js" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">INICIO</a>
                    <a href="/src/app/modulos/page.jsx" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">MODULOS</a>
                </div>

                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/inicio/logo.png"
                        alt="Baby Life"
                        width={128}  // Mayor resolución
                        height={128}
                        quality={100} // Aumenta la calidad
                        className="h-16 w-auto"
                    />
                </Link>

                {/* Right Section */}
                <div className="flex space-x-6">
                    <a href="/src/app/consejosRapidos/page.jsx" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">CONSEJO RÁPIDO</a>
                    <a href="/src/app/contacto/page.jsx" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">CONTACTO</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;