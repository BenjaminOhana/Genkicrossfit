import { motion } from 'framer-motion';

export function ClosingCTA() {
    return (
        <section id="closing" className="relative py-32 md:py-48 bg-black text-center overflow-hidden">
            {/* Subtle center glow instead of aggressive full red background */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-wine/10 rounded-full blur-[100px] md:blur-[150px] opacity-70"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading uppercase tracking-tighter text-white">
                        Ta place est<br className="md:hidden" /> ici.
                    </h2>

                    <p className="text-xl md:text-2xl text-white/50 font-body max-w-2xl mx-auto mb-14 font-light tracking-wide">
                        Tu n'as pas besoin d'être prêt.<br className="hidden md:block" /> Tu as juste besoin de commencer.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <a
                            href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                            data-cta
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex items-center justify-center px-10 py-5 sm:px-14 sm:py-6
                                rounded-full bg-white text-black font-heading text-sm md:text-base 
                                tracking-widest uppercase transition-all duration-500 
                                hover:bg-wine hover:text-white hover:scale-105 hover:border-transparent
                                shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(122,31,46,0.4)]
                                border border-white/10
                            "
                        >
                            Réserve ta séance d'essai gratuite
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
