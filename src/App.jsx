import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logotipo from './assets/LOGOTIPO.jpg';

// COMPONENTES DEFINIDOS FUERA PARA EVITAR ERRORES DE RENDERIZADO AL SCROLLEAR
const Reveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const PrestigeMap = () => (
  <div className="w-full max-w-xl aspect-[21/9] mt-12 mb-8 border border-white/10 shadow-2xl overflow-hidden relative group">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54522.012476566275!2d-61.53039148560089!3d-31.258832822457816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca630f92f25f2b%3A0xc3f7a63d9196b278!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1709200000000!5m2!1ses-419!2sar" 
      width="100%" 
      height="100%" 
      style={{ 
        border: 0, 
        filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)',
        WebkitFilter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.8)'
      }} 
      allowFullScreen="" 
      loading="lazy"
    ></iframe>
    <div className="absolute inset-0 pointer-events-none bg-verde-bosque/20" />
  </div>
);

function App() {
  const [vista, setVista] = useState('landing');
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setMostrarBoton(window.scrollY > 400);
    };
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  const irA = (nuevaVista) => {
    window.scrollTo(0, 0);
    setVista(nuevaVista);
  };

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-prestige text-blanco-hueso font-sans selection:bg-blanco-hueso selection:text-verde-bosque overflow-x-hidden flex flex-col">
      
      {/* NAVBAR GLOBAL */}
      <nav className="w-full border-b border-white/10 z-50 bg-verde-bosque/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 md:px-8 py-6 md:py-8 flex justify-between items-center">
          <button 
            onClick={() => irA('landing')} 
            className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer outline-none"
          >
            <img src={logotipo} alt="PIVOT" className="h-8 md:h-12 w-auto object-contain" />
            <div className="hidden sm:block h-8 w-px bg-white/10 mx-2" />
            <span className="hidden sm:block text-[10px] font-sans opacity-40 tracking-[0.3em] uppercase text-white font-medium">&lt;EST. 2026 /&gt;</span>
          </button>
          
          <div className="flex items-center space-x-8 md:space-x-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
            {vista === 'landing' ? (
              <>
                <a href="#ventajas" className="hidden lg:block hover:opacity-100 transition-opacity no-underline text-white">Prestigio</a>
                <a href="#planes" className="hidden lg:block hover:opacity-100 transition-opacity no-underline text-white">Soluciones</a>
                <button onClick={() => irA('terminos')} className="hover:opacity-100 transition-opacity bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em]">Acuerdos</button>
              </>
            ) : (
              <button onClick={() => irA('landing')} className="hover:opacity-100 transition-opacity bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em]">← Inicio</button>
            )}
            <a href="https://wa.link/nofyhp" target="_blank" rel="noreferrer" className="bg-blanco-hueso text-verde-bosque px-6 md:px-10 py-3 font-bold text-[10px] uppercase tracking-[0.2em] no-underline hover:scale-105 transition-transform shadow-xl">
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        {vista === 'landing' ? (
          <div className="animate-in fade-in duration-700">
            
            {/* HERO SECTION - REINVENTED */}
            <header className="container mx-auto px-8 py-32 md:py-48 flex flex-col items-center text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20" />
              <Reveal>
                <div className="inline-block px-6 py-2 mb-8 rounded-none border border-white/20 text-white text-[10px] font-medium uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md">
                  📍 Rafaela, Santa Fe — Argentina
                </div>
              </Reveal>

              <Reveal>
                <PrestigeMap />
              </Reveal>

              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-5xl md:text-[120px] font-serif font-bold tracking-tighter mb-12 max-w-6xl leading-[0.9] text-balance text-white"
              >
                El cambio en la <br/>
                <span className="italic font-normal opacity-70">dirección correcta.</span>
              </motion.h1>

              <Reveal>
                <p className="text-xl md:text-2xl text-blanco-hueso/80 max-w-4xl mb-16 leading-relaxed font-serif italic">
                  En <span className="text-white font-bold not-italic">PIVOT</span> desarrollamos tu página web y sistemas de gestión bajo estándares de alto prestigio. 
                  Elevamos tu presencia online a la altura de la trayectoria que representás.
                </p>
              </Reveal>

              <div className="flex flex-col sm:flex-row gap-10 items-center">
                <a href="https://wa.link/nofyhp" className="text-white border-b border-white/30 pb-2 text-sm uppercase tracking-[0.3em] font-bold no-underline hover:border-white transition-all">Iniciar Auditoría</a>
                <a href="#planes" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity no-underline text-white">
                  <span className="w-12 h-px bg-white/20 group-hover:w-16 transition-all" /> Explorar Soluciones
                </a>
              </div>
            </header>

            {/* VALORES - ASYMMETRIC LAYOUT */}
            <section id="ventajas" className="py-48 bg-white/2 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
              <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none mb-10 text-white">Tu visión merece <br/> <span className="italic font-normal opacity-50">distinción absoluta.</span></h2>
                  <p className="text-[11px] opacity-40 max-w-md font-sans leading-loose tracking-widest uppercase">No somos una agencia convencional. Somos un estudio de ingeniería que prioriza el prestigio sobre lo genérico.</p>
                </Reveal>

                <div className="space-y-24">
                  {[
                    { n: "01", t: "Trato Personalizado", d: "Atendemos en Rafaela y zona de forma presencial. PIVOT es compromiso directo y cara a cara." },
                    { n: "02", t: "Ingeniería Web", d: "Código a medida de alto rendimiento. Nuestra lógica de backend garantiza tu seguridad y velocidad.", shift: true },
                    { n: "03", t: "Exclusividad Premium", d: "Cada proyecto es una pieza única. Reflejamos la autoridad de tu marca en cada píxel." }
                  ].map((val, i) => (
                    <Reveal key={i}>
                      <div className={`flex gap-10 items-start ${val.shift ? 'md:translate-x-12' : ''}`}>
                        <span className="text-4xl font-serif italic opacity-20 text-white">{val.n}</span>
                        <div>
                          <h3 className="text-2xl font-serif font-bold mb-4 italic text-white/90">{val.t}</h3>
                          <p className="opacity-60 leading-relaxed font-sans text-blanco-hueso/80">{val.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* ECOSISTEMAS - PREMIUM CARDS */}
            <section id="planes" className="container mx-auto px-8 py-48">
              <Reveal>
                <div className="text-center mb-32">
                  <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic text-white">Ecosistemas</h2>
                  <p className="text-xs uppercase tracking-[0.5em] opacity-40 font-medium">Soluciones diseñadas para perdurar</p>
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {[
                  { c: "01", t: "Presencia & Autoridad Digital", p: "Landings de autor para quienes no aceptan una plantilla como respuesta. Velocidad y diseño de vanguardia.", s: "Landing de Autor" },
                  { c: "02", t: "Sistemas de Gestión a Medida", p: "Software de núcleo empresarial. Gestión, control y escalabilidad bajo infraestructura de alta seguridad.", s: "Crecimiento Estructural" }
                ].map((card, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="p-16 bg-white/[0.03] border border-white/5 relative overflow-hidden group transition-all duration-500">
                    <h3 className="text-[10px] uppercase tracking-[0.4em] mb-12 opacity-40 font-bold text-white">Concepto {card.c}</h3>
                    <h4 className="text-4xl font-serif font-bold mb-8 italic text-white leading-tight">{card.t}</h4>
                    <p className="opacity-50 mb-12 leading-relaxed font-sans max-w-xs text-blanco-hueso/80">{card.p}</p>
                    <div className="flex justify-between items-center border-t border-white/10 pt-10">
                      <span className="text-xs font-bold uppercase tracking-widest italic text-white/60">{card.s}</span>
                      <a href="https://wa.link/nofyhp" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blanco-hueso hover:text-verde-bosque transition-all text-white hover:text-verde-bosque">→</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="container mx-auto px-8 py-32 max-w-5xl min-h-[80vh] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-24 text-center tracking-tighter text-white">
              TÉRMINOS Y CONDICIONES <br/>
              <span className="italic font-normal opacity-50 text-2xl md:text-3xl">— DE SERVICIO PIVOT —</span>
            </h2>

            <div className="space-y-20 font-sans text-sm md:text-base leading-loose opacity-70 text-blanco-hueso/80">
              {[
                { t: "1. OBJETO Y ALCANCE", p: "El presente documento establece los términos bajo los cuales PIVOT provee servicios de desarrollo web y sistemas de gestión empresarial a medida. La contratación implica la aceptación plena de estas condiciones." },
                { t: "2. ESPECIFICACIONES DE PAGO", p: "Honorarios de desarrollo en Pesos Argentinos (ARS). Mantenimiento mensual fijado en Dólares Estadounidenses (USD), pagaderos en ARS según cotización Dólar MEP." },
                { t: "3. PROPIEDAD INTELECTUAL", p: "El cliente posee la propiedad sobre el diseño estético. El Código Fuente Base y la lógica interna son propiedad exclusiva de PIVOT, otorgando Licencia de Uso Perpetua." },
                { t: "4. CONTINUIDAD Y SOPORTE", p: "El incumplimiento en el pago superior a 30 días faculta la suspensión temporal del acceso. Garantizamos respuesta técnica profesional." },
                { t: "5. CONFIDENCIALIDAD", p: "Compromiso de estricta confidencialidad sobre datos y estrategias comerciales bajo normativas de Protección de Datos Personales." },
                { t: "6. JURISDICCIÓN", p: "Las partes se someten a los Tribunales Ordinarios de la Ciudad de Rafaela, Provincia de Santa Fe." }
              ].map((sec, i) => (
                <div key={i} className="border-l border-white/10 pl-8">
                  <h3 className="text-xl font-serif font-bold mb-6 text-white italic">{sec.t}</h3>
                  <p>{sec.p}</p>
                </div>
              ))}
            </div>
            <button onClick={() => irA('landing')} className="mt-24 bg-blanco-hueso text-verde-bosque px-10 py-4 font-bold uppercase text-[10px] tracking-widest cursor-pointer border-none hover:scale-105 transition-transform shadow-2xl">Volver al inicio</button>
          </div>
        )}
      </main>

      {/* FOOTER GLOBAL */}
      <footer className="container mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-30">
        <div className="flex items-center gap-6">
          <img src={logotipo} alt="PIVOT" className="h-8 w-auto object-contain" />
          <span className="w-8 h-px bg-white/20" />
          © 2026 PIVOT DEVSTUDIO. RAFAELA.
        </div>
        <div className="flex gap-16">
          <button onClick={() => irA('terminos')} className="bg-transparent border-none text-white cursor-pointer uppercase text-[10px] tracking-widest opacity-50 hover:opacity-100 transition-opacity font-bold">Acuerdos</button>
          <a href="#" className="hover:opacity-100 transition-opacity no-underline text-white">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity no-underline text-white">Email</a>
        </div>
      </footer>

      {/* BOTÓN VOLVER ARRIBA - BONE WHITE ARROW */}
      {mostrarBoton && vista === 'landing' && (
        <button 
          onClick={volverArriba} 
          className="fixed bottom-12 right-12 z-50 bg-blanco-hueso text-verde-bosque p-4 rounded-full shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer border-none outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

    </div>
  );
}

export default App;
