import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logotipo from './assets/LOGOTIPO.jpg';

function App() {
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const controlarScroll = () => {
      setMostrarBoton(window.scrollY > 400);
    };
    window.addEventListener('scroll', controlarScroll);
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
      {/* NAVBAR */}
      <nav className="container mx-auto px-8 py-10 flex justify-between items-center z-50 relative border-b border-white/5">
        <div className="flex items-center gap-4">
          <img 
            src={logotipo} 
            alt="PIVOT Imagotipo" 
            className="h-12 w-auto object-contain" 
          />
          <div className="hidden sm:block h-8 w-px bg-white/10 mx-2" />
          <span className="hidden sm:block text-[10px] font-sans font-normal opacity-40 tracking-[0.3em] uppercase">
            &lt;EST. 2026 /&gt;
          </span>
        </div>
        <div className="hidden md:flex space-x-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
          <a href="#ventajas" className="hover:opacity-100 transition-opacity">Prestigio</a>
          <a href="#planes" className="hover:opacity-100 transition-opacity">Soluciones</a>
          <a href="#terminos" className="hover:opacity-100 transition-opacity">Acuerdos</a>
        </div>
        <a 
          href="https://wa.link/nofyhp" 
          target="_blank" 
          rel="noreferrer"
          className="bg-blanco-hueso text-verde-bosque px-10 py-3 rounded-none font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-opacity-90 hover:scale-105 active:scale-95"
        >
          Hablemos
        </a>
      </nav>

      {/* HERO SECTION - REINVENTED */}
      <header className="container mx-auto px-8 py-32 md:py-48 flex flex-col items-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20" />
        
        <Reveal>
          <div className="inline-block px-6 py-2 mb-12 rounded-none border border-white/10 text-blanco-hueso text-[10px] font-medium uppercase tracking-[0.3em] backdrop-blur-md">
            📍 Rafaela, Santa Fe — Argentina
          </div>
        </Reveal>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-[120px] font-serif font-bold tracking-tighter mb-12 max-w-6xl leading-[0.9] text-balance"
        >
          El cambio en la <br/>
          <span className="italic font-normal opacity-70 serif-font">dirección correcta.</span>
        </motion.h1>

        <Reveal>
          <p className="text-xl md:text-2xl opacity-60 max-w-4xl mb-16 leading-relaxed font-serif italic-font">
            En <span className="text-blanco-hueso opacity-100">PIVOT</span> desarrollamos tu página web y sistemas de gestión bajo estándares de alto prestigio. 
            Elevamos tu presencia online a la altura de la trayectoria que representás.
          </p>
        </Reveal>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-10 items-center"
        >
          <a href="https://wa.link/nofyhp" className="text-blanco-hueso border-b border-blanco-hueso/30 pb-2 text-sm uppercase tracking-[0.3em] font-bold hover:border-blanco-hueso transition-all">
            Iniciar Auditoría
          </a>
          <a href="#planes" className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity">
            <span className="w-12 h-px bg-white/20 group-hover:w-16 transition-all" />
            Explorar Soluciones
          </a>
        </motion.div>
      </header>

      {/* VALORES - ASYMMETRIC LAYOUT */}
      <section id="ventajas" className="py-48 bg-white/2 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <Reveal>
              <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none mb-10">
                Tu visión merece <br/> 
                <span className="italic font-normal opacity-50">distinción absoluta.</span>
              </h2>
              <p className="text-lg opacity-40 max-w-md font-sans leading-loose tracking-wide uppercase text-[11px]">
                No somos una agencia convencional. Somos un estudio de ingeniería que prioriza el prestigio y la exclusividad sobre lo genérico.
              </p>
            </Reveal>

            <div className="space-y-24">
              <Reveal>
                <div className="flex gap-10 items-start">
                  <span className="text-4xl font-serif italic opacity-20">01</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Trato Personalizado</h3>
                    <p className="opacity-50 font-sans leading-relaxed">Entendemos tu negocio cara a cara en Rafaela y zona. Sin intermediarios, sin bots. PIVOT es compromiso directo.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex gap-10 items-start translate-x-12">
                  <span className="text-4xl font-serif italic opacity-20">02</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Ingeniería Web</h3>
                    <p className="opacity-50 font-sans leading-relaxed">Código a medida de alto rendimiento. Nuestra lógica de backend es el activo que garantiza tu seguridad y velocidad.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="flex gap-10 items-start">
                  <span className="text-4xl font-serif italic opacity-20">03</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Exclusividad Premium</h3>
                    <p className="opacity-50 font-sans leading-relaxed">Cada proyecto es una pieza única de software. Reflejamos la autoridad de tu marca en cada píxel.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCIONES - PREMIUM CARDS */}
      <section id="planes" className="container mx-auto px-8 py-48">
        <Reveal>
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-serif font-bold mb-8 italic">Ecosistemas</h2>
            <p className="text-xs uppercase tracking-[0.5em] opacity-40 font-medium">Soluciones diseñadas para perdurar</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-16 bg-white/[0.03] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] mb-12 opacity-40 font-bold">Concepto 01</h3>
            <h4 className="text-4xl font-serif font-bold mb-8 italic text-balance">Presencia & <br/>Autoridad Digital</h4>
            <p className="opacity-50 mb-12 leading-relaxed font-sans max-w-xs">Landings de autor para quienes no aceptan una plantilla como respuesta. Velocidad y diseño de vanguardia.</p>
            <div className="flex justify-between items-center border-t border-white/10 pt-10">
              <span className="text-xs font-bold uppercase tracking-widest italic">Landing de Autor</span>
              <a href="https://wa.link/nofyhp" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blanco-hueso group-hover:text-verde-bosque transition-all">→</a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-16 bg-white/[0.03] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-[10px] uppercase tracking-[0.4em] mb-12 opacity-40 font-bold">Concepto 02</h3>
            <h4 className="text-4xl font-serif font-bold mb-8 italic text-balance">Sistemas de <br/>Gestión a Medida</h4>
            <p className="opacity-50 mb-12 leading-relaxed font-sans max-w-xs">Software de núcleo empresarial. Gestión, control y escalabilidad bajo infraestructura de alta seguridad.</p>
            <div className="flex justify-between items-center border-t border-white/10 pt-10">
              <span className="text-xs font-bold uppercase tracking-widest italic">Crecimiento Estructural</span>
              <a href="https://wa.link/nofyhp" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blanco-hueso group-hover:text-verde-bosque transition-all">→</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TERMINOS Y CONDICIONES */}
      <section id="terminos" className="py-48 bg-white/2 border-t border-white/5">
        <div className="container mx-auto px-8 max-w-5xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-24 text-center tracking-tighter">
              TÉRMINOS Y CONDICIONES <br/>
              <span className="italic font-normal opacity-50 text-2xl md:text-3xl">— DE SERVICIO PIVOT —</span>
            </h2>
          </Reveal>

          <div className="space-y-20 font-sans text-sm leading-loose opacity-70">
            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">1. OBJETO Y ALCANCE</h3>
              <p>El presente documento establece los términos bajo los cuales PIVOT (en adelante, "La Startup") provee servicios de desarrollo web, diseño de interfaces y sistemas de gestión empresarial a medida. La contratación de cualquier servicio implica la aceptación plena de estas condiciones de alta profesionalidad y estándar técnico.</p>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">2. ESPECIFICACIONES DE PAGO Y MONEDA</h3>
              <p className="mb-6">Para garantizar la estabilidad y el mantenimiento de estándares tecnológicos de vanguardia, PIVOT establece el siguiente esquema de honorarios:</p>
              <ul className="space-y-6 pl-6 border-l border-white/10">
                <li><strong>Desarrollo Inicial:</strong> El costo de creación, diseño e implementación del proyecto se estipula en Pesos Argentinos (ARS), cancelables según el cronograma de hitos acordado (Anticipo y Entrega Final).</li>
                <li><strong>Mantenimiento y Soporte:</strong> El abono mensual por servicios de infraestructura, hosting de alta velocidad, certificados SSL y soporte técnico se fija en Dólares Estadounidenses (USD).</li>
                <li><strong>Conversión:</strong> El pago de dicha mensualidad se realizará en Pesos Argentinos (ARS), calculados según la cotización del Dólar MEP (Mercado Electrónico de Pagos) del día hábil anterior a la fecha de facturación.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">3. PROPIEDAD INTELECTUAL Y LICENCIAMIENTO</h3>
              <p className="mb-6 italic">PIVOT protege su activo más valioso: la ingeniería de software.</p>
              <ul className="space-y-6 pl-6 border-l border-white/10">
                <li><strong>Activos Visuales:</strong> Una vez cancelado el total del servicio, PIVOT cede al Cliente la propiedad sobre el diseño estético, logotipos aplicados y contenido visual del sitio.</li>
                <li><strong>Sistemas y Código Fuente:</strong> El Código Fuente Base, las arquitecturas de sistemas de gestión y la lógica de programación interna son propiedad intelectual exclusiva de PIVOT.</li>
                <li><strong>Licencia de Uso:</strong> Se otorga al Cliente una Licencia de Uso Perpetua e Intransferible sobre la tecnología desarrollada. El acceso al código fuente original (backend/lógica de negocio) no está incluido en el servicio estándar, resguardando la integridad del software y la seguridad del ecosistema PIVOT.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">4. CONTINUIDAD DEL SERVICIO</h3>
              <p className="mb-6 italic">El prestigio de PIVOT se basa en la disponibilidad y seguridad de sus sistemas.</p>
              <ul className="space-y-6 pl-6 border-l border-white/10">
                <li><strong>Mora:</strong> El incumplimiento en el pago del abono mensual por un período superior a los treinta (30) días corridos facultará a PIVOT a suspender temporalmente el acceso al sistema y la visibilidad de la plataforma para resguardar los recursos del servidor.</li>
                <li><strong>Soporte:</strong> PIVOT garantiza un tiempo de respuesta profesional ante incidencias técnicas, priorizando la estabilidad del negocio del cliente.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">5. CONFIDENCIALIDAD</h3>
              <p>PIVOT se compromete a mantener estricta confidencialidad sobre los datos de facturación, bases de datos de clientes y estrategias comerciales a las que tenga acceso durante el desarrollo de sistemas de gestión, bajo las normativas de Protección de Datos Personales de la República Argentina.</p>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-serif font-bold mb-6 text-blanco-hueso opacity-100 italic tracking-wide">6. JURISDICCIÓN</h3>
              <p>Para todos los efectos legales, las partes se someten a la jurisdicción y competencia de los Tribunales Ordinarios de la Ciudad de Rafaela, Provincia de Santa Fe, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponderles.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER - MINIMAL */}
      <footer className="container mx-auto px-8 py-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-30">
        <div className="flex items-center gap-6">
          <img 
            src={logotipo} 
            alt="PIVOT Logo" 
            className="h-8 w-auto object-contain" 
          />
          <span className="w-8 h-px bg-white/20" />
          © 2026 PIVOT DEVSTUDIO. RAFAELA.
        </div>
        <div className="flex gap-16">
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Email</a>
        </div>
      </footer>

      {/* BACK TO TOP */}
      {mostrarBoton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={volverArriba}
          className="fixed bottom-12 right-12 mix-blend-difference z-50 hover:-translate-y-2 transition-transform"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-blanco-hueso border-b border-blanco-hueso/20 pb-2">Top</span>
        </motion.button>
      )}

    </div>
  );
}

export default App;
