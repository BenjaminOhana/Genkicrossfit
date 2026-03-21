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
        <section ref={sectionRef} className="relative py-28 md:py-40 bg-black overflow-hidden">

            {/* Photo de fond — très sombre, effet d'ambiance */}
            <motion.div
                className="absolute inset-0 z-0 scale-110"
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
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="md:col-span-7 lg:col-span-8"
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
                                    className="absolute left-0 bottom-1 md:bottom-2 h-[3px] md:h-[4px] bg-wine rounded-full"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                />
                            </span>
                        </h2>
                    </motion.div>

                    {/* Colonne Droite : Les Arguments subtils (40%) */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 space-y-6">

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex items-center gap-4 group"
                        >
                            <span className="w-1 h-5 bg-wine/30 group-hover:bg-wine transition-colors duration-300"></span>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                CrossFit adapté à ton niveau
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="flex items-center gap-4 group"
                        >
                            <span className="w-1 h-5 bg-wine/30 group-hover:bg-wine transition-colors duration-300"></span>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                Coaching certifié & encadré
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                            className="flex items-center gap-4 group"
                        >
                            <span className="w-1 h-5 bg-wine/30 group-hover:bg-wine transition-colors duration-300"></span>
                            <p className="text-cream/60 font-body text-sm md:text-base tracking-wider group-hover:text-white transition-colors duration-300 uppercase">
                                Communauté forte & soudée
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
