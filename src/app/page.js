<<<<<<< HEAD
import React from 'react';
import Header from './componentes/header';
import Image from 'next/image';
import Footer from './componentes/footer';
import Testimonial from "./inicio/index.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#824058] to-[#a46372]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
          {/* Left Content */}
          <div className="md:w-1/2 py-12 md:py-20 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              ¡Tu <span className="text-[#FF6FB0]">mejor aliado</span> para el viaje<br />
              de ser <span className="text-[#FF6FB0]">padre primerizo</span>!
            </h1>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Accede a consejos prácticos, cursos rápidos y herramientas<br />
              esenciales para cada etapa del desarrollo de tu bebé.
            </p>

            <button className="bg-[#FF6FB0] hover:bg-[#e55a9d] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Más información
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full aspect-square">
              <Image
                src="/inicio/family-illustration.jpeg"
                alt="Happy family illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="absolute inset-y-1/2 w-full h-3 bg-[#FF6FB0]"></div>
            </div>
            <div className="relative flex justify-center">
              <h2 className="text-3xl md:text-4xl font-serif bg-white px-6 text-[#424242] inline-block">
                ¿Por qué elegirnos?
              </h2>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl text-gray-600 text-center mb-12">
            Beneficios del Microaprendizaje
          </h3>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '/inicio/icons/megaphone.svg',
                title: 'Atracción',
                text: 'Consigue la atención de las personas con un diseño único.'
              },
              {
                icon: '/inicio/icons/diamond.svg',
                title: 'Calidad Excepcional',
                text: 'Destaca con una calidad superior ante la competencia.'
              },
              {
                icon: '/inicio/icons/corazon.svg',
                title: 'Experiencia Única',
                text: 'Entorno envolvente e inolvidable para los usuarios.'
              },
              {
                icon: '/inicio/icons/clock.svg', // Cambiado el icono duplicado
                title: 'Aprendizaje Rápido',
                text: 'Contenido accesible y fácil de digerir en poco tiempo.'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#FF6FB0]/10 p-4 rounded-full mb-4">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-[#424242]">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos Destacados Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#424242] mb-4">
              Módulos Destacados
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              Soluciones personalizadas y de alta calidad adaptadas a tus necesidades
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={`/inicio/${item}.png`}
                    alt={`Módulo ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-center text-[#424242] group-hover:text-[#FF6FB0] transition-colors">
                    {[
                      'Primeros días con tu bebé',
                      'El sueño del recién nacido',
                      'Alimentación segura',
                      'Cuidados básicos',
                      'Salud infantil',
                      'Desarrollo motor'
                    ][item - 1]}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonios Section */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
>>>>>>> d4a1847 (Initial commit from Create Next App)
