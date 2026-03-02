import { motion } from 'framer-motion';

export function Schedule() {
    return (
        <section id="schedule" className="py-24 md:py-32 bg-black text-cream overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Emploi du temps</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-white">Trouve ton créneau.</h2>
                    <p className="text-lg text-cream/70 font-body mb-8">
                        Choisis ta séance, réserve en 2 clics. Simple.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/5 rounded-2xl p-2 md:p-6 border border-white/10"
                >
                    <div className="w-full h-[600px] md:h-[800px] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-0">
                            <div className="animate-pulse flex space-x-4 mb-4">
                                <div className="h-12 w-12 bg-white/10 rounded-full"></div>
                            </div>
                            <p className="text-white/30 font-heading uppercase tracking-widest text-xl">Chargement du Planning Peppy...</p>
                        </div>
                        <div className="relative z-10 text-center bg-black/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 max-w-lg">
                            <h3 className="text-2xl font-bold mb-4 font-heading uppercase tracking-wide">Planning en cours d'intégration</h3>
                            <p className="text-cream/70 mb-6">En attendant la connexion avec Peppy, tu peux consulter les horaires et réserver directement sur la plateforme.</p>
                            <a href="https://app.peppy.cool" data-cta target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                                Accéder à Peppy
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-cream/60 font-body mb-6">Pas encore membre ?</p>
                    <a href="https://app.peppy.cool" data-cta target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Commence par une séance d'essai gratuite
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
