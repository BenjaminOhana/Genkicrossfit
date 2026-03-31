import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Timer, Trophy } from 'lucide-react';

export function Hyrox() {
    useEffect(() => {
        document.title = "HYROX Training à Talange, Thionville & Metz | CrossFit Genki";
        const metaDesc = document.querySelector('meta[name="description"]');
        const canonical = document.querySelector('link[rel="canonical"]');
        const prevDesc = metaDesc?.getAttribute('content') || '';
        const prevCanonical = canonical?.getAttribute('href') || '';
        if (metaDesc) {
            metaDesc.setAttribute('content', "Prépare-toi pour HYROX chez CrossFit Genki à Talange (57). Entraînements spécifiques course + fonctionnel. 50+ athlètes préparés. Coaching certifié. Essai gratuit.");
        }
        if (canonical) {
            canonical.setAttribute('href', 'https://genkicrossfit.netlify.app/hyrox');
        }
        return () => {
            document.title = "CrossFit Genki — Salle de CrossFit à Talange près de Metz | Séance d'essai gratuite";
            if (metaDesc) metaDesc.setAttribute('content', prevDesc);
            if (canonical) canonical.setAttribute('href', prevCanonical);
        };
    }, []);
    return (
        <div className="w-full bg-black">
            {/* 1. Hero impactant (Option A) */}
            <section id="hyrox-hero" className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden pt-20">
                {/* Background image full opacity with custom overlay */}
                <div
                    className="absolute inset-0 bg-[url('/assets/optimized/hero-bg.webp')] bg-cover bg-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
                <div className="absolute inset-0 bg-black/40" /> {/* Extra darkening for text legibility */}

                <div className="max-w-5xl mx-auto px-6 text-center relative z-10 w-full flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-5 py-2 mb-8 border border-wine/50 rounded-full text-wine font-heading tracking-widest text-sm uppercase bg-black/60 backdrop-blur-md"
                    >
                        Programmation Officielle HYROX
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl"
                    >
                        HYROX <span className="text-wine">METZ</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-3xl text-cream/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-lg"
                    >
                        La course approche. Ne la subissez pas, dominez-la.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full max-w-md mx-auto"
                    >
                        <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/offers/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-lg py-4 shadow-xl shadow-wine/20">
                            Rejoindre la prépa AEROX
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* 2. Bandeau de stats / Réassurance */}
            <section className="bg-wine border-y border-white/10 relative z-20 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-white text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4"
                        >
                            <Users size={32} className="text-white/80 shrink-0" />
                            <div className="text-left">
                                <span className="block font-bold text-2xl font-heading">+50 athlètes Genki</span>
                                <span className="text-sm text-white/80 uppercase tracking-wider">préparés aux derniers events</span>
                            </div>
                        </motion.div>

                        <div className="hidden md:block w-px h-12 bg-white/20"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex items-center gap-4"
                        >
                            <Timer size={32} className="text-white/80 shrink-0" />
                            <div className="text-left">
                                <span className="block font-bold text-2xl font-heading">Méthode AEROX</span>
                                <span className="text-sm text-white/80 uppercase tracking-wider">Programmation sur-mesure</span>
                            </div>
                        </motion.div>

                        <div className="hidden md:block w-px h-12 bg-white/20"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <Trophy size={32} className="text-white/80 shrink-0" />
                            <div className="text-left">
                                <span className="block font-bold text-2xl font-heading">1 Objectif</span>
                                <span className="text-sm text-white/80 uppercase tracking-wider">Finisher ou Podium</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. L'explication et la Méthode */}
            <section id="hyrox-method" className="py-24 md:py-32 bg-gray text-black relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-wine font-heading">Le cardio ne suffit pas. L'encadrement fait toute la différence.</h2>

                        <div className="text-lg md:text-xl text-black/80 font-body leading-relaxed space-y-6 max-w-3xl mx-auto">
                            <p>
                                Chez Genki, l'Hyrox n'est pas un concept abstrait ajouté sur un planning à la dernière minute.
                            </p>
                            <p className="font-medium text-black">
                                Avec la programmation spécifique <span className="text-wine font-bold">AEROX</span>, tu profites de véritables cours à thèmes et d'un encadrement millimétré.
                            </p>
                            <p>
                                Chaque séance est pensée, structurée et testée pour t'emmener au bout de toi-même et pulvériser ton chrono le jour J, que tu sois là juste pour finir la course ou pour viser le podium.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/offers/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto px-12 py-4">
                            Réserver une séance AEROX
                        </a>
                        <span className="text-sm text-black/50 block sm:hidden">Accès via abonnement Full ou à l'unité</span>
                    </motion.div>
                    <p className="hidden sm:block text-sm text-black/50 text-center mt-4">
                        Accès inclus dans l'abonnement Full Access ou avec un Carnet.
                    </p>
                </div>
            </section>
        </div>
    );
}
