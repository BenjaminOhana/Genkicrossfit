import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function HeroTransition() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax léger sur la photo de fond
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="relative pt-16 pb-48 md:pt-24 md:pb-64 bg-black">

            {/* Smooth top fade — seamless blend from Hero black */}
            <div className="absolute top-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-[5]" />

            {/* Photo de fond — très sombre, effet d'ambiance */}
            <motion.div
                className="absolute inset-0 z-0 scale-110 will-change-transform"
                style={{ y: imageY }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: "url('/assets/optimized/hero-transition-bg.webp')" }}
                />
                {/* Gradient pour fondre les bords */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

                    {/* Colonne Gauche : La Citation (60%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:col-span-7 lg:col-span-8 will-change-transform will-change-opacity"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-white/90 leading-[1.1] mb-2">
                            Ici, on ne vient pas<br />juste transpirer.
                        </h2>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tight text-wine leading-[1.1]">
                            On vient pour se<br />sentir{' '}
                            <span className="relative inline-block">
                                vivant.
                                {/* Underline animé au scroll */}
                                <motion.span
                                    className="absolute left-0 -bottom-1 md:-bottom-2 h-[3px] md:h-[4px] bg-wine rounded-full w-full origin-left will-change-transform"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                />
                            </span>
                        </h2>
                    </motion.div>

                    {/* Colonne Droite : Les Arguments subtils (40%) */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 space-y-7">

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex items-center gap-5 group will-change-transform will-change-opacity"
                        >
                            {/* Icône niveaux / barres croissantes */}
                            <div className="shrink-0 w-10 h-10 rounded-full border border-cream/20 group-hover:border-cream/50 bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/50 group-hover:text-cream transition-colors duration-300">
                                    <rect x="4" y="14" width="4" height="6" rx="1" />
                                    <rect x="10" y="9" width="4" height="11" rx="1" />
                                    <rect x="16" y="4" width="4" height="16" rx="1" />
                                </svg>
                            </div>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                CrossFit adapté à ton niveau
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="flex items-center gap-5 group will-change-transform will-change-opacity"
                        >
                            {/* Icône bouclier / certifié */}
                            <div className="shrink-0 w-10 h-10 rounded-full border border-cream/20 group-hover:border-cream/50 bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/50 group-hover:text-cream transition-colors duration-300">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                Coaching certifié & encadré
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className="flex items-center gap-5 group will-change-transform will-change-opacity"
                        >
                            {/* Icône communauté / personnes */}
                            <div className="shrink-0 w-10 h-10 rounded-full border border-cream/20 group-hover:border-cream/50 bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cream/50 group-hover:text-cream transition-colors duration-300">
                                    <circle cx="9" cy="7" r="3" />
                                    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                                    <circle cx="17" cy="9" r="2.5" />
                                    <path d="M21 21v-1.5a3 3 0 00-3-3h-1" />
                                </svg>
                            </div>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                Communauté forte & soudée
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Gradient into the next section (cream) — ultra-smooth fade, extends below section */}
            <div className="absolute -bottom-24 md:-bottom-32 left-0 right-0 h-64 md:h-80 pointer-events-none z-20" style={{
                background: `linear-gradient(to bottom,
                    transparent 0%,
                    rgba(10,10,10,0.3) 10%,
                    rgba(10,10,10,0.6) 18%,
                    rgba(10,10,10,0.85) 25%,
                    #0A0A0A 33%,
                    #0f0f0e 40%,
                    #181715 47%,
                    #252420 53%,
                    #3a3833 59%,
                    #555249 64%,
                    #726f64 69%,
                    #8f8b80 74%,
                    #a8a498 79%,
                    #bfbbb0 84%,
                    #d2cfc5 88%,
                    #e2dfd7 92%,
                    #eceae3 95%,
                    #F5F5F0 100%
                )`
            }} />
        </section>
    );
}
