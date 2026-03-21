import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Image monte plus lentement = effet parallax
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    // Logo watermark bouge encore plus lentement
    const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    // Texte monte légèrement au scroll pour accentuer la profondeur
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    // Légère atténuation du texte au scroll
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
            {/* Background Image — avec parallax */}
            <motion.div
                className="absolute inset-0 z-0 scale-110"
                style={{ y: imageY }}
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

                {/* Watermark Logo — parallax plus doux */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none overflow-hidden"
                    style={{ y: watermarkY }}
                >
                    <img
                        src="/assets/crossfit-genki-logo.svg"
                        alt=""
                        className="w-[85%] md:w-[60%] h-auto object-contain"
                        style={{ filter: 'grayscale(100%) brightness(3) contrast(0.6)' }}
                    />
                </motion.div>
            </motion.div>

            {/* Content — monte au scroll */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
                style={{ y: contentY, opacity: contentOpacity }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mb-6 flex items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                >
                    <span className="w-1 h-1 rounded-full bg-wine"></span>
                    <span className="text-white text-[11px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-center">Salle affiliée CrossFit et HYROX</span>
                    <span className="w-1 h-1 rounded-full bg-wine"></span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-7xl md:text-[9rem] lg:text-[11rem] font-bold font-heading uppercase tracking-tighter text-white leading-[0.85] mb-8"
                >
                    CrossFit
                    <br />
                    <span className="text-wine">Genki</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-lg md:text-xl font-body text-cream/70 mb-12 tracking-widest uppercase font-light max-w-xl mx-auto italic"
                >
                    La santé vient en bougeant.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4"
                >
                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        data-cta
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center justify-center
                            font-heading uppercase tracking-widest
                            transition-all duration-500
                            w-full max-w-[280px] sm:max-w-none sm:w-auto

                            /* Mobile : style bordure fine blanche */
                            text-xs py-3 px-6 border border-white/40 text-white/80 hover:border-wine hover:text-wine

                            /* Desktop : bouton rouge plein */
                            sm:text-sm sm:bg-wine sm:text-white sm:border-transparent sm:px-10 sm:py-4
                            sm:hover:bg-white sm:hover:text-black sm:hover:border-transparent
                            sm:shadow-[0_0_30px_rgba(122,31,46,0.3)] sm:hover:shadow-[0_0_50px_rgba(122,31,46,0.5)]
                        "
                    >
                        Réserve ta séance d'essai gratuite
                    </a>

                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/offers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex items-center justify-center
                            font-heading uppercase tracking-widest
                            transition-all duration-300
                            w-full max-w-[280px] sm:max-w-none sm:w-auto
                            
                            /* Plus discret : bordure transparente/légère */
                            text-xs py-3 px-6 
                            text-white/60 hover:text-white
                            border border-transparent hover:border-white/30
                            sm:text-sm sm:py-4 sm:px-10
                        "
                    >
                        Voir les formules
                    </a>
                </motion.div>
            </motion.div>

            {/* Bottom badge — très discret */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 w-full px-4 z-10 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-cream/70 text-[10px] md:text-xs font-heading tracking-[0.15em] md:tracking-[0.25em] uppercase"
            >
                <span>⭐ 5/5 sur Google</span>
                <span className="text-cream/20">·</span>
                <span>Toutes nos offres sans engagement</span>
                <span className="text-cream/20">·</span>
                <span>Talange (57)</span>
            </motion.div>
        </section>
    );
}
