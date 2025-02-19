import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="w-full px-8 py-6 bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left Section */}
                <div className="flex space-x-6">
                    <Link href="/" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        INICIO
                    </Link>
                    <Link href="/modulos" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        MODULOS
                    </Link>
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
                <div className="flex space-x-6 items-center">
                    <Link href="/consejosRapidos" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        CONSEJO RÁPIDO
                    </Link>
                    <Link href="/contacto" className="text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110">
                        CONTACTO
                    </Link>

                    {/* Botón de Login */}
                    <Link
                        href="/login"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        LOGIN
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;