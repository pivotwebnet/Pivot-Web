import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logotipo from './assets/LOGOTIPO.png';
import casoExito1 from './assets/casoexito1.png';
import casoExito2 from './assets/casoexito2.png';

/**
 * COMPONENTES DE APOYO (Definidos fuera para estabilidad)
 */

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      animate={{ 
        x: mousePosition.x, 
        y: mousePosition.y,
        scale: isHovering ? 1.4 : 1,
        rotate: isHovering ? -10 : 0
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.4 }}
    >
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-2px, -2px)' }}
      >
        <path 
          d="M2 2L22 8L12 12L8 22L2 2Z" 
          fill="#F2F1ED" 
          stroke="#1C4B3D" 
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language.split('-')[0];

  return (
    <div className="flex items-center gap-4 text-[16px] md:text-[18px]">
      <button 
        onClick={() => changeLanguage('es')} 
        className={`hover:scale-120 transition-transform bg-transparent border-none cursor-pointer filter ${currentLanguage === 'es' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}
        title="Español"
      >
        🇦🇷
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`hover:scale-120 transition-transform bg-transparent border-none cursor-pointer filter ${currentLanguage === 'en' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}
        title="English"
      >
        🇺🇸
      </button>
      <button 
        onClick={() => changeLanguage('pt')} 
        className={`hover:scale-120 transition-transform bg-transparent border-none cursor-pointer filter ${currentLanguage === 'pt' ? 'opacity-100 grayscale-0' : 'opacity-40 grayscale'}`}
        title="Português"
      >
        🇧🇷
      </button>
    </div>
  );
};

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

const PrestigeMap = ({ isFooter = false }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  return (
    <div 
      className={`${isFooter ? 'w-full h-48 md:h-64' : 'w-full max-w-xl aspect-[21/9] mt-12 mb-8'} border border-white/10 shadow-2xl overflow-hidden relative group cursor-pointer transition-all hover:border-white/20`}
      onClick={() => !active && setActive(true)}
    >
      {!active ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-verde-bosque/40 backdrop-blur-sm group-hover:bg-verde-bosque/30 transition-all z-20">
          <svg className="w-8 h-8 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-40 group-hover:opacity-80 transition-opacity">{t('map.view_location')}</span>
        </div>
      ) : (
        <iframe 
          title={t('map.view_location')}
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
      )}
      <div className="absolute inset-0 pointer-events-none bg-verde-bosque/20 z-10" />
    </div>
  );
};

/**
 * COMPONENTE PRINCIPAL
 */

function App() {
  const { t } = useTranslation();
  const [vista, setVista] = useState('landing');
  const [mostrarBoton, setMostrarBoton] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Control de scroll optimizado
  useEffect(() => {
    const controlarScroll = () => {
      setMostrarBoton(window.scrollY > 400);
    };
    window.addEventListener('scroll', controlarScroll, { passive: true });
    return () => window.removeEventListener('scroll', controlarScroll);
  }, []);

  // Navegación con reset de posición
  const irA = useCallback((nuevaVista) => {
    setVista(nuevaVista);
    setMenuAbierto(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Scroll suave manual para anclas
  const scrollA = (e, id) => {
    e.preventDefault();
    setMenuAbierto(false);
    
    // Pequeño delay para dejar que el menú empiece a cerrarse
    setTimeout(() => {
      const elemento = document.getElementById(id);
      if (elemento) {
        const offset = 100; // Ajuste para el Navbar sticky
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementoRect = elemento.getBoundingClientRect().top;
        const posicionElemento = elementoRect - bodyRect;
        const posicionFinal = posicionElemento - offset;

        window.scrollTo({
          top: posicionFinal,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const volverArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-prestige text-blanco-hueso font-sans selection:bg-blanco-hueso selection:text-verde-bosque overflow-x-hidden flex flex-col">
      <CustomCursor />
      
      {/* NAVBAR */}
      <nav className="w-full border-b border-white/10 z-50 bg-verde-bosque/80 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => irA('landing')} 
              className="flex items-center gap-3 bg-transparent border-none p-0 cursor-pointer outline-none transition-opacity hover:opacity-80"
              aria-label={t('nav.start')}
            >
              <img src={logotipo} alt="Logo PIVOT" className="h-15 md:h-15 w-auto object-contain" />
              <div className="hidden sm:block h-8 w-px bg-white/10 mx-2" />
              <span className="hidden sm:block text-[10px] font-sans opacity-40 tracking-[0.3em] uppercase text-white font-medium">&lt;EST. 2026 /&gt;</span>
            </button>
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-8 md:space-x-16 text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">
            {vista === 'landing' ? (
              <>
                <a href="#ventajas" onClick={(e) => scrollA(e, 'ventajas')} className="hover:opacity-100 hover:scale-110 transform transition-all duration-300 no-underline text-white inline-block origin-center">{t('nav.what_we_offer')}</a>
                <a href="#planes" onClick={(e) => scrollA(e, 'planes')} className="hover:opacity-100 hover:scale-110 transform transition-all duration-300 no-underline text-white inline-block origin-center">{t('nav.solutions')}</a>
                <button 
                  onClick={() => irA('terminos')} 
                  className="hover:opacity-100 hover:scale-110 transform transition-all duration-300 bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em] inline-block origin-center"
                >
                  {t('nav.terms')}
                </button>
              </>
            ) : (
              <button 
                onClick={() => irA('landing')} 
                className="hover:opacity-100 hover:scale-110 transform transition-all duration-300 bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em] inline-block origin-center"
              >
                ← {t('nav.start')}
              </button>
            )}
            <a 
              href="https://wa.link/nofyhp" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-blanco-hueso text-verde-bosque px-10 py-3 font-bold text-[10px] uppercase tracking-[0.2em] no-underline hover:scale-105 transition-transform shadow-xl active:scale-95"
            >
              {t('nav.let_talk')}
            </a>
          </div>

          {/* Botón Hamburguesa (Mobile) */}
          <div className="flex lg:hidden items-center gap-4">
            <a 
              href="https://wa.link/nofyhp" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-blanco-hueso text-verde-bosque px-5 py-2.5 font-bold text-[9px] uppercase tracking-[0.1em] no-underline shadow-xl active:scale-95"
            >
              {t('nav.talk')}
            </a>
            <button 
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="text-white p-2 focus:outline-none"
              aria-label="Alternar menú"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${menuAbierto ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${menuAbierto ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Menú Mobile Overlay */}
        <motion.div 
          initial={false}
          animate={{ height: menuAbierto ? 'auto' : 0, opacity: menuAbierto ? 1 : 0 }}
          className="lg:hidden overflow-hidden bg-verde-bosque/95 border-b border-white/10"
        >
          <div className="flex flex-col p-8 gap-8 text-[11px] uppercase tracking-[0.4em] font-medium text-center items-center">
            <LanguageSwitcher />
            {vista === 'landing' ? (
              <>
                <a href="#ventajas" onClick={(e) => scrollA(e, 'ventajas')} className="w-full py-2 text-white no-underline border-b border-white/5 hover:scale-105 transition-transform">{t('nav.what_we_offer')}</a>
                <a href="#planes" onClick={(e) => scrollA(e, 'planes')} className="w-full py-2 text-white no-underline border-b border-white/5 hover:scale-105 transition-transform">{t('nav.solutions')}</a>
                <a href="#proyectos" onClick={(e) => scrollA(e, 'proyectos')} className="w-full py-2 text-white no-underline border-b border-white/5 hover:scale-105 transition-transform">{t('success_cases.title')}</a>
                <button 
                  onClick={() => irA('terminos')} 
                  className="w-full py-2 bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em] hover:scale-105 transition-transform"
                >
                  {t('terms.title')}
                </button>
              </>
            ) : (
              <button 
                onClick={() => irA('landing')} 
                className="w-full py-2 bg-transparent border-none text-white cursor-pointer uppercase tracking-[0.4em] hover:scale-105 transition-transform"
              >
                ← {t('nav.back_to_start')}
              </button>
            )}
          </div>
        </motion.div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        {vista === 'landing' ? (
          <div className="animate-in fade-in duration-700">
            
            {/* HERO SECTION */}
            <header className="container mx-auto px-6 py-24 md:py-48 flex flex-col items-center text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 md:h-24 bg-gradient-to-b from-transparent to-white/20" />
              <Reveal>
                <div className="inline-block px-5 py-2 mb-8 border border-white/20 text-white text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md">
                  {t('hero.location')}
                </div>
              </Reveal>

              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-[120px] font-serif font-bold tracking-tighter mb-10 md:mb-12 max-w-6xl leading-[1] md:leading-[0.9] text-balance text-white"
              >
                {t('hero.title')} <br/>
                <span className="italic font-normal opacity-70">{t('hero.title_italic')}</span>
              </motion.h1>

              <Reveal>
                <p className="text-lg md:text-2xl text-blanco-hueso/70 max-w-4xl mb-12 leading-relaxed font-sans font-light tracking-wide text-balance">
                  {t('hero.description')}
                </p>
              </Reveal>
              <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-center">
                <a href="https://wa.link/nofyhp" target="_blank" rel="noreferrer" className="text-white border-b border-white/30 pb-2 text-sm uppercase tracking-[0.3em] font-bold no-underline hover:border-white transition-all">{t('hero.contact')}</a>
                <a href="#planes" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity no-underline text-white">
                  <span className="w-12 h-px bg-white/20 group-hover:w-16 transition-all" /> {t('hero.explore')}
                </a>
              </div>
            </header>

            {/* SECCIÓN VALORES */}
            <section id="ventajas" className="py-24 md:py-48 bg-white/2 backdrop-blur-3xl border-y border-white/5 relative overflow-hidden">
              <div className="container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <Reveal>
                  <h2 className="text-4xl md:text-7xl font-serif font-bold leading-none mb-8 md:mb-10 text-white">{t('values.title')} <br/> <span className="italic font-normal opacity-50">{t('values.title_italic')}</span></h2>
                  <p className="text-[10px] md:text-[11px] opacity-40 max-w-md font-sans leading-loose tracking-widest uppercase">{t('values.description')}</p>
                </Reveal>

                <div className="space-y-16 md:space-y-24">
                  {[
                    { n: "01", t: t('values.01.title'), d: t('values.01.description') },
                    { n: "02", t: t('values.02.title'), d: t('values.02.description'), shift: true },
                    { n: "03", t: t('values.03.title'), d: t('values.03.description') }
                  ].map((val, i) => (
                    <Reveal key={i}>
                      <div className={`flex gap-6 md:gap-10 items-start ${val.shift ? 'md:translate-x-12' : ''}`}>
                        <span className="text-3xl md:text-4xl font-serif italic opacity-20 text-white">{val.n}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 italic text-white/90">{val.t}</h3>
                          <p className="text-sm md:text-base opacity-60 leading-relaxed font-sans text-blanco-hueso/80">{val.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN ECOSISTEMAS */}
            <section id="planes" className="container mx-auto px-6 md:px-8 py-24 md:py-48">
              <Reveal>
                <div className="text-center mb-16 md:mb-32">
                  <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 italic text-white">{t('solutions.title')}</h2>
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] opacity-40 font-medium">{t('solutions.subtitle')}</p>
                </div>
              </Reveal>

              <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 gap-6 md:gap-12 max-w-7xl mx-auto pb-8 md:pb-0">
                {[
                  { 
                    c: "01", 
                    t: t('solutions.card_01.title'), 
                    p: t('solutions.card_01.description'), 
                    s: t('solutions.card_01.footer') 
                  },
                  { 
                    c: "02", 
                    t: t('solutions.card_02.title'), 
                    p: t('solutions.card_02.description'), 
                    s: t('solutions.card_02.footer') 
                  }
                ].map((card, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10 }} 
                    className="min-w-[85vw] md:min-w-0 snap-center p-8 md:p-16 bg-white/[0.03] border border-white/5 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-8 md:mb-12 opacity-40 font-bold text-white text-balance"></h3>
                      <h4 className="text-3xl md:text-4xl font-serif font-bold mb-6 md:mb-8 italic text-white leading-tight text-balance">{card.t}</h4>
                      <p className="text-sm md:text-base opacity-50 mb-8 md:mb-12 leading-relaxed font-sans max-w-xs text-blanco-hueso/80">{card.p}</p>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/10 pt-8 md:pt-10">
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest italic text-white/60">{card.s}</span>
                      <a href="https://wa.link/nofyhp" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blanco-hueso hover:text-verde-bosque transition-all text-white hover:text-verde-bosque" aria-label="Consultar por esta solución">→</a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Indicador de Deslizamiento (Solo Mobile) */}
              <div className="flex md:hidden justify-center gap-2 mt-4 opacity-30">
                 <div className="w-8 h-1 bg-white rounded-full" />
                 <div className="w-2 h-1 bg-white/20 rounded-full" />
              </div>
            </section>

            {/* SECCIÓN PORTAFOLIO / CASOS DE ÉXITO */}
            <section id="proyectos" className="py-24 md:py-48 overflow-hidden bg-white/1 relative group/section">
              <div className="container mx-auto px-6 md:px-8 mb-16 md:mb-24">
                <Reveal>
                  <h2 className="text-4xl md:text-8xl font-serif font-bold mb-6 md:mb-8 italic text-white text-balance">{t('success_cases.title')}</h2>
                  <p className="text-[10px] md:text-[11px] opacity-40 max-w-md font-sans leading-loose tracking-widest uppercase mb-8 md:mb-12 text-balance">{t('success_cases.description')}</p>
                </Reveal>
              </div>

              {/* Botones de Navegación Lateral (Solo visibles en Desktop al hacer hover) */}
              <div className="hidden md:block">
                <button 
                  onClick={() => document.getElementById('slider-proyectos').scrollBy({ left: -500, behavior: 'smooth' })}
                  className="absolute left-8 top-[60%] -translate-y-1/2 z-40 w-16 h-16 rounded-full border border-white/10 bg-verde-bosque/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-blanco-hueso hover:text-verde-bosque transition-all opacity-0 group-hover/section:opacity-100 cursor-pointer shadow-2xl"
                  aria-label={t('success_cases.prev')}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={() => document.getElementById('slider-proyectos').scrollBy({ left: 500, behavior: 'smooth' })}
                  className="absolute right-8 top-[60%] -translate-y-1/2 z-40 w-16 h-16 rounded-full border border-white/10 bg-verde-bosque/40 backdrop-blur-xl text-white flex items-center justify-center hover:bg-blanco-hueso hover:text-verde-bosque transition-all opacity-0 group-hover/section:opacity-100 cursor-pointer shadow-2xl"
                  aria-label={t('success_cases.next')}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <div 
                id="slider-proyectos"
                className="flex gap-8 md:gap-10 overflow-x-auto pb-12 md:pb-16 px-6 md:px-[10%] snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
              >
                {[
                  { t: t('success_cases.project_01.title'), c: t('success_cases.project_01.category'), d: t('success_cases.project_01.description'), l: "https://wa.link/nofyhp", img: casoExito1 },
                  { t: t('success_cases.project_02.title'), c: t('success_cases.project_02.category'), d: t('success_cases.project_02.description'), l: "https://wa.link/nofyhp", img: casoExito2 },
                  { t: t('success_cases.project_03.title'), c: t('success_cases.project_03.category'), d: t('success_cases.project_03.description'), l: "https://wa.link/nofyhp" }  
                ].map((proj, i) => (
                  <motion.div 
                    key={i} 
                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[500px] snap-center group"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-[16/10] bg-white/5 border border-white/10 mb-6 md:mb-8 relative overflow-hidden flex items-center justify-center transition-all group-hover:border-white/20 shadow-2xl">
                      {proj.img ? (
                        <img 
                          src={proj.img} 
                          alt={proj.t} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30 group-hover:opacity-90" 
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700" />
                          <div className="z-10 text-center">
                             <span className="text-[9px] uppercase tracking-[0.4em] opacity-30 group-hover:opacity-60 transition-opacity">{t('success_cases.image_placeholder')}</span>
                          </div>
                        </>
                      )}

                      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 bg-verde-bosque/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 border border-white/10 rounded-full">
                         <div className="w-1.5 h-1.5 rounded-full bg-verde-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)] transition-all duration-300 group-hover:bg-emerald-300 group-hover:shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                         <span className="text-[7px] md:text-[8px] uppercase tracking-widest text-black-700 font-bold">{t('success_cases.optimized')}</span>
                      </div>
                    </div>

                    <div className="px-1 md:px-2">
                      <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 italic text-white/90">{proj.t}</h3>
                      <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-4 font-bold tracking-widest">{proj.c}</p>
                      <p className="opacity-50 text-xs md:text-sm leading-relaxed mb-6 max-w-sm text-blanco-hueso/80">{proj.d}</p>
                      <a 
                        href={proj.l} 
                        className="inline-flex items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-white transition-all no-underline group/link"
                      >
                        {t('success_cases.see_details')} 
                        <span className="w-8 h-px bg-white/20 group-hover/link:w-12 transition-all" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CALL TO ACTION FINAL */}
            <section className="py-24 md:py-48 bg-white/2 border-t border-white/5 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
              <div className="container mx-auto px-6 text-center relative z-10">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl md:text-9xl font-serif font-bold mb-8 md:mb-12 italic text-white tracking-tighter leading-tight">{t('cta.title')}</h2>
                  <p className="text-lg md:text-2xl opacity-60 max-w-2xl mx-auto mb-12 md:mb-16 font-sans font-light tracking-wide text-blanco-hueso/80 text-balance">
                    {t('cta.description')}
                  </p>
                  <a 
                    href="https://wa.link/nofyhp" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block bg-blanco-hueso text-verde-bosque px-10 md:px-16 py-5 md:py-6 font-bold text-[11px] md:text-base uppercase tracking-[0.3em] no-underline hover:scale-105 transition-transform shadow-2xl hover:bg-white active:scale-95"
                  >
                    {t('cta.button')}
                  </a>
                </Reveal>
              </div>
            </section>

          </div>
        ) : (
          /* VISTA TÉRMINOS Y CONDICIONES */
          <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl min-h-[80vh] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold mb-16 md:mb-24 text-center tracking-tighter text-white">
              {t('terms.title')} <br/>
              <span className="italic font-normal opacity-50 text-lg md:text-3xl">{t('terms.subtitle')}</span>
            </h2>

            <div className="space-y-16 md:space-y-20 font-sans text-sm md:text-base leading-loose opacity-70 text-blanco-hueso/80">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="border-l border-white/10 pl-6 md:pl-8">
                  <h3 className="text-lg md:text-xl font-serif font-bold mb-4 md:mb-6 text-white italic tracking-wide">{t(`terms.section_0${num}.title`)}</h3>
                  <p className="text-sm md:text-base">{t(`terms.section_0${num}.description`)}</p>
                </div>
              ))}
            </div>
            <button 
              onClick={() => irA('landing')} 
              className="mt-16 md:mt-24 bg-blanco-hueso text-verde-bosque px-8 md:px-10 py-4 font-bold uppercase text-[10px] tracking-widest cursor-pointer border-none hover:scale-105 transition-transform shadow-2xl active:scale-95"
            >
              {t('terms.back')}
            </button>
          </div>
        )}
      </main>

      {/* FOOTER GLOBAL CON MAPA */}
      <footer className="bg-white/2 border-t border-white/5 pt-16 md:pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Información Institucional */}
          <div className="space-y-10 md:space-y-12">
            <div className="flex items-center gap-4">
              <img src={logotipo} alt="PIVOT Logo" className="h-7 md:h-12 w-auto object-contain" />
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium opacity-40 italic">{t('footer.location')}</span>
            </div>
            
            <div className="flex flex-col gap-6 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium opacity-30">
              <div className="flex flex-wrap gap-8 md:gap-12">
                <button onClick={() => irA('terminos')} className="bg-transparent border-none text-white cursor-pointer uppercase text-[9px] md:text-[10px] tracking-widest font-bold hover:opacity-100 transition-opacity">{t('footer.agreements')}</button>
                <a href="https://www.instagram.com/pivot.web/" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity no-underline text-white">Instagram</a>
                <a href="mailto:pivotweb.net@gmail.com" className="hover:opacity-100 transition-opacity no-underline text-white">Email</a>
              </div>
              <p className="text-[8px] md:text-[10px]">{t('footer.rights')}</p>
            </div>
          </div>

          {/* Mapa Minimalista */}
          <div className="w-full">
            <PrestigeMap isFooter={true} />
            <p className="mt-4 text-[8px] md:text-[9px] uppercase tracking-[0.4em] opacity-20 text-right italic font-serif">{t('footer.local_presence')}</p>
          </div>
        </div>
      </footer>

      {/* BOTÓN VOLVER ARRIBA */}
      {mostrarBoton && vista === 'landing' && (
        <button 
          onClick={volverArriba} 
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50 bg-blanco-hueso text-verde-bosque p-3 md:p-4 rounded-full shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer border-none outline-none active:scale-90"
          aria-label="Volver arriba"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

    </div>
  );
}

export default App;
