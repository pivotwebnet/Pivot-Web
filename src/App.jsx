import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logotipo from './assets/LOGOTIPO.jpg';

function App() {
  const [vista, setVista] = useState('landing'); // 'landing' o 'terminos'
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const controlarScroll = () => {
      setMostrarBoton(window.scrollY > 400);
    };
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  const irA = (nuevaVista) => {
    setVista(nuevaVista);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Reveal = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-prestige text-blanco-hueso font-sans selection:bg-blanco-hueso selection:text-verde-bosque overflow-x-hidden">
      
      {/* NAVBAR GLOBAL */}
      <nav className="container mx-auto px-6 md:px-8 py-6 md:py-10 flex justify-between items-center z-50 relative border-b border-white/10">
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => irA('landing')} 
            className="cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-3 md:gap-4 outline-none border-none bg-transparent p-0"
          >
            <img 
              src={logotipo} 
              alt="PIVOT Imagotipo" 
              className="h-8 md:h-12 w-auto object-contain" 
            />
            <div className="hidden sm:block h-6 md:h-8 w-px bg-white/20 mx-1 md:mx-2" />
            <span className="hidden sm:block text-[8px] md:text-[10px] font-sans font-normal opacity-50 tracking-[0.3em] uppercase">
              &lt;EST. 2026 /&gt;
            </span>
          </button>
        </div>
        
        <div className="hidden lg:flex space-x-12 text-[10px] uppercase tracking-[0.4em] font-medium opacity-70">
          {vista === 'landing' ? (
            <>
              <a href="#ventajas" className="hover:opacity-100 transition-opacity">Prestigio</a>
              <a href="#planes" className="hover:opacity-100 transition-opacity">Soluciones</a>
              <button onClick={() => irA('terminos')} className="hover:opacity-100 transition-opacity uppercase tracking-[0.4em] bg-transparent border-none text-white cursor-pointer">Acuerdos</button>
            </>
          ) : (
            <button onClick={() => irA('landing')} className="hover:opacity-100 transition-opacity uppercase tracking-[0.4em] bg-transparent border-none text-white cursor-pointer">Volver al Inicio</button>
          )}
        </div>

        <a 
          href="https://wa.link/nofyhp" 
          target="_blank" 
          rel="noreferrer"
          className="bg-blanco-hueso text-verde-bosque px-6 md:px-10 py-2 md:py-3 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all hover:bg-opacity-90 hover:scale-105 active:scale-95 shadow-xl"
        >
          Hablemos
        </a>
      </nav>

      <AnimatePresence mode="wait">
        {vista === 'landing' ? (
          <motion.main
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* HERO SECTION */}
            <header className="container mx-auto px-6 md:px-8 py-24 md:py-48 flex flex-col items-center text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-24 bg-gradient-to-b from-transparent to-white/20" />
              <Reveal>
                <div className="inline-block px-4 md:px-6 py-2 mb-8 md:mb-12 rounded-none border border-white/20 text-blanco-hueso text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em] backdrop-blur-md bg-white/5">
                  📍 Rafaela, Santa Fe — Argentina
                </div>
              </Reveal>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-[100px] lg:text-[120px] font-serif font-bold tracking-tighter mb-8 md:mb-12 max-w-6xl leading-[1.1] md:leading-[0.9] text-balance text-white"
              >
                El cambio en la <br/>
                <span className="italic font-normal opacity-60 text-blanco-hueso/80">dirección correcta.</span>
              </motion.h1>
              <Reveal>
                <p className="text-base md:text-2xl text-blanco-hueso/90 max-w-4xl mb-12 md:mb-16 leading-relaxed font-serif italic text-balance">
                  En <span className="text-white font-bold opacity-100 not-italic">PIVOT</span> desarrollamos tu página web y sistemas de gestión bajo estándares de alto prestigio. 
                  Elevamos tu presencia online a la altura de la trayectoria que representás.
                </p>
              </Reveal>
              <motion.div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-center">
                <a href="https://wa.link/nofyhp" className="text-white border-b border-white/40 pb-2 text-xs md:text-sm uppercase tracking-[0.3em] font-bold hover:border-white transition-all">Iniciar Auditoría</a>
                <a href="#planes" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-70 hover:opacity-100 transition-opacity">
                  <span className="w-8 md:w-12 h-px bg-white/30 group-hover:w-16 transition-all" />
                  Explorar Soluciones
                </a>
              </motion.div>
            </header>

            {/* VALORES */}
            <section id="ventajas" className="py-24 md:py-48 bg-white/2 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
              <div className="container mx-auto px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                  <Reveal>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 md:mb-10 text-white">Tu visión merece <br/> <span className="italic font-normal opacity-50">distinción absoluta.</span></h2>
                    <p className="text-[10px] md:text-[11px] opacity-60 max-w-md font-sans leading-loose tracking-widest uppercase mb-12 lg:mb-0">No somos una agencia convencional. Somos un estudio de ingeniería que prioriza el prestigio y la exclusividad sobre lo genérico.</p>
                  </Reveal>
                  <div className="space-y-16 md:space-y-24">
                    {[
                      { n: "01", t: "Trato Personalizado", d: "Entendemos tu negocio cara a cara en Rafaela y zona. Sin intermediarios, sin bots. PIVOT es compromiso directo." },
                      { n: "02", t: "Ingeniería Web", d: "Código a medida de alto rendimiento. Nuestra lógica de backend es el activo que garantiza tu seguridad y velocidad.", shift: true },
                      { n: "03", t: "Exclusividad Premium", d: "Cada proyecto es una pieza única de software. Reflejamos la autoridad de tu marca en cada píxel." }
                    ].map((val, i) => (
                      <Reveal key={i}>
                        <div className={`flex gap-6 md:gap-10 items-start ${val.shift ? 'md:translate-x-12' : ''}`}>
                          <span className="text-2xl md:text-4xl font-serif italic opacity-30 text-white">{val.n}</span>
                          <div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4 italic text-white/90">{val.t}</h3>
                            <p className="text-sm md:text-base opacity-70 font-sans leading-relaxed text-blanco-hueso">{val.d}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* MAPA */}
            <section className="bg-verde-bosque py-24 border-b border-white/5">
              <div className="container mx-auto px-6 md:px-8">
                <Reveal>
                  <div className="max-w-7xl mx-auto overflow-hidden border border-white/10 shadow-2xl bg-white/5 relative">
                    <div className="relative w-full h-[350px] md:h-[450px]">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54522.012476566275!2d-61.53039148560089!3d-31.258832822457816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ca630f92f25f2b%3A0xc3f7a63d9196b278!2sRafaela%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1709200000000!5m2!1ses-419!2sar" width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)', WebkitFilter: 'grayscale(1) invert(0.9) contrast(1.2)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      <div className="absolute inset-0 pointer-events-none bg-verde-bosque/20" />
                    </div>
                  </div>
                  <p className="text-center mt-8 text-[10px] uppercase tracking-[0.4em] opacity-40 italic">Presencia local. Alcance global.</p>
                </Reveal>
              </div>
            </section>

            {/* SOLUCIONES */}
            <section id="planes" className="container mx-auto px-6 md:px-8 py-24 md:py-48">
              <Reveal>
                <div className="text-center mb-16 md:mb-32">
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold mb-6 md:mb-8 italic text-white">Ecosistemas</h2>
                  <p className="text-[9px] md:text-xs uppercase tracking-[0.5em] opacity-50 font-medium">Soluciones diseñadas para perdurar</p>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
                {[
                  { c: "01", t: "Presencia & Autoridad Digital", p: "Landings de autor para quienes no aceptan una plantilla como respuesta. Velocidad y diseño de vanguardia.", s: "Landing de Autor" },
                  { c: "02", t: "Sistemas de Gestión a Medida", p: "Software de núcleo empresarial. Gestión, control y escalabilidad bajo infraestructura de alta seguridad.", s: "Crecimiento Estructural" }
                ].map((card, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.01 }} className="p-8 md:p-16 bg-white/[0.03] border border-white/5 relative overflow-hidden group hover:bg-white/[0.05] transition-all">
                    <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-12 opacity-50 font-bold">Concepto {card.c}</h3>
                    <h4 className="text-2xl md:text-4xl font-serif font-bold mb-6 md:mb-8 italic text-balance text-white">{card.t}</h4>
                    <p className="text-sm md:text-base opacity-60 mb-8 md:mb-12 leading-relaxed font-sans max-w-xs">{card.p}</p>
                    <div className="flex justify-between items-center border-t border-white/10 pt-8 md:pt-10">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest italic text-white/80">{card.s}</span>
                      <a href="https://wa.link/nofyhp" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blanco-hueso hover:text-verde-bosque transition-all">→</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.main>
        ) : (
          <motion.main
            key="terminos"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 md:px-8 py-24 md:py-32 max-w-5xl"
          >
            <div className="mb-16">
              <button 
                onClick={() => irA('landing')}
                className="text-[10px] uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2 mb-12 bg-transparent border-none text-white cursor-pointer"
              >
                ← Volver al inicio
              </button>
              <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tighter text-white mb-4">
                TÉRMINOS Y CONDICIONES
              </h2>
              <p className="italic font-normal opacity-40 text-xl md:text-2xl font-serif">— ACUERDO DE SERVICIO PIVOT —</p>
            </div>

            <div className="space-y-16 font-sans text-sm md:text-base leading-relaxed text-blanco-hueso/80 pb-24">
              {[
                { t: "1. OBJETO Y ALCANCE", p: "El presente documento establece los términos bajo los cuales PIVOT (en adelante, \"La Startup\") provee servicios de desarrollo web, diseño de interfaces y sistemas de gestión empresarial a medida. La contratación de cualquier servicio implica la aceptación plena de estas condiciones de alta profesionalidad y estándar técnico." },
                { t: "2. ESPECIFICACIONES DE PAGO Y MONEDA", p: "Para garantizar la estabilidad y el mantenimiento de estándares tecnológicos de vanguardia, PIVOT establece el siguiente esquema de honorarios:", list: [
                  "Desarrollo Inicial: El costo de creación, diseño e implementación del proyecto se estipula en Pesos Argentinos (ARS), cancelables según el cronograma de hitos acordado.",
                  "Mantenimiento y Soporte: El abono mensual se fija en Dólares Estadounidenses (USD) para servicios de infraestructura y hosting.",
                  "Conversión: El pago se realizará en ARS al Dólar MEP del día anterior a la facturación."
                ]},
                { t: "3. PROPIEDAD INTELECTUAL", p: "PIVOT protege su activo más valioso: la ingeniería de software.", list: [
                  "Activos Visuales: El Cliente posee la propiedad del diseño estético una vez cancelado el servicio.",
                  "Sistemas y Código: El Código Fuente Base y la lógica interna son propiedad exclusiva de PIVOT.",
                  "Licencia: Se otorga Licencia de Uso Perpetua e Intransferible. El acceso al backend original no está incluido resguardando la seguridad."
                ]},
                { t: "4. CONTINUIDAD DEL SERVICIO", p: "El prestigio de PIVOT se basa en la disponibilidad y seguridad.", list: [
                  "Mora: El incumplimiento superior a 30 días faculta la suspensión del acceso al sistema.",
                  "Soporte: Garantizamos respuesta profesional priorizando la estabilidad del negocio."
                ]},
                { t: "5. CONFIDENCIALIDAD", p: "PIVOT se compromete a mantener estricta confidencialidad sobre los datos de facturación y estrategias comerciales bajo normativas de Protección de Datos Personales." },
                { t: "6. JURISDICCIÓN", p: "Las partes se someten a los Tribunales Ordinarios de la Ciudad de Rafaela, Provincia de Santa Fe." }
              ].map((sec, i) => (
                <div key={i} className="border-l border-white/10 pl-8">
                  <h3 className="text-xl font-serif font-bold mb-6 text-white italic tracking-wide">{sec.t}</h3>
                  <p className="mb-4">{sec.p}</p>
                  {sec.list && (
                    <ul className="space-y-4 mt-6">
                      {sec.list.map((item, j) => <li key={j} className="text-sm opacity-80"><strong>•</strong> {item}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* FOOTER GLOBAL */}
      <footer className="container mx-auto px-6 md:px-8 py-16 md:py-24 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={logotipo} alt="PIVOT Logo" className="h-6 md:h-8 w-auto object-contain" />
          <span className="w-6 md:w-8 h-px bg-white/30" />
          © 2026 PIVOT DEVSTUDIO. RAFAELA.
        </div>
        <div className="flex gap-8 md:gap-16">
          <button onClick={() => irA('terminos')} className="hover:opacity-100 transition-opacity uppercase text-[10px] tracking-[0.3em] bg-transparent border-none text-white cursor-pointer opacity-50">Términos</button>
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Email</a>
        </div>
      </footer>

      {/* BOTÓN VOLVER ARRIBA (Solo en Landing) */}
      {mostrarBoton && vista === 'landing' && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={volverArriba}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 bg-blanco-hueso text-verde-bosque p-3 md:p-4 rounded-full shadow-2xl hover:-translate-y-2 transition-transform"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}

    </div>
  );
}

export default App;
