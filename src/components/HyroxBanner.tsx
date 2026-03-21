import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Timer, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export function HyroxBanner() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="hyrox" className="relative bg-black w-full border-y border-white/5">
            {/* Banner / Hero part - Always visible */}
            <div className={`relative ${isExpanded ? 'py-16 md:py-24' : 'py-24 md:py-32'} flex flex-col items-center justify-center overflow-hidden transition-all duration-500`}>
                <div className="absolute inset-0 bg-[url('/assets/optimized/hyrox-bg.webp')] bg-cover bg-center md:bg-right opacity-30 mix-blend-luminosity grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
                <div className="absolute inset-0 bg-black/40" />

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-5 py-2 mb-8 border border-wine/50 rounded-full text-wine font-heading tracking-widest text-sm uppercase bg-black/60 backdrop-blur-md"
                    >
                        Programmation Officielle HYROX
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl uppercase"
                    >
                        PRÉPARATION <span className="text-wine">HYROX</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg"
                    >
                        La course approche. Ne la subissez pas, dominez-la.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-white/80 hover:text-white uppercase tracking-widest text-sm md:text-base font-heading transition-colors border-b border-white/30 hover:border-white pb-1"
                    >
                        {isExpanded ? "Réduire les infos" : "Découvrir le programme"}
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        {/* Stats Banner */}
                        <div className="bg-wine border-y border-white/10 relative z-20 shadow-2xl">
                            <div className="max-w-7xl mx-auto px-4 py-8">
                                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-white text-center">
                                    <div className="flex items-center gap-4">
                                        <Users size={32} className="text-white/80 shrink-0" />
                                        <div className="text-left">
                                            <span className="block font-bold text-2xl font-heading">+50 athlètes Genki</span>
                                            <span className="text-sm text-white/80 uppercase tracking-wider">préparés aux derniers events</span>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-px h-12 bg-white/20"></div>

                                    <div className="flex items-center gap-4">
                                        <Timer size={32} className="text-white/80 shrink-0" />
                                        <div className="text-left">
                                            <span className="block font-bold text-2xl font-heading">Méthode HYROX</span>
                                            <span className="text-sm text-white/80 uppercase tracking-wider">Programmation sur-mesure</span>
                                        </div>
                                    </div>

                                    <div className="hidden md:block w-px h-12 bg-white/20"></div>

                                    <div className="flex items-center gap-4">
                                        <Trophy size={32} className="text-white/80 shrink-0" />
                                        <div className="text-left">
                                            <span className="block font-bold text-2xl font-heading">1 Objectif</span>
                                            <span className="text-sm text-white/80 uppercase tracking-wider">Finisher ou Podium</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Explanation & Method */}
                        <div className="py-20 bg-gray text-black relative">
                            <div className="max-w-4xl mx-auto px-6 text-center">
                                <h3 className="text-3xl md:text-5xl font-bold mb-10 text-wine font-heading">Le cardio ne suffit pas. L'encadrement fait toute la différence.</h3>

                                <div className="text-lg md:text-xl text-black/80 font-body leading-relaxed space-y-6 max-w-3xl mx-auto">
                                    <p>
                                        Chez Genki, l'HYROX n'est pas un concept abstrait ajouté sur un planning à la dernière minute.
                                    </p>
                                    <p className="font-medium text-black">
                                        Avec la programmation spécifique <span className="text-wine font-bold">HYROX</span>, tu profites de véritables cours à thèmes et d'un encadrement millimétré.
                                    </p>
                                    <p>
                                        Chaque séance est pensée, structurée et testée pour t'emmener au bout de toi-même et pulvériser ton chrono le jour J, que tu sois là juste pour finir la course ou pour viser le podium.
                                    </p>
                                </div>

                                <div className="mt-16 flex flex-col items-center justify-center gap-4">
                                    <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/offers/" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-4">
                                        Réserver une séance HYROX
                                    </a>
                                    <p className="text-sm text-black/50 text-center mt-2">
                                        Accès inclus dans l'abonnement Full Access ou avec un Carnet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
