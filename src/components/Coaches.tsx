import { motion } from 'framer-motion';

export function Coaches() {
    const coaches = [
        {
            name: "Adrien Marquis",
            role: "Fondateur & Owner",
            certifications: ["CrossFit Level 1", "Level 2 (en cours)"],
            quote: "Toujours bienveillant (sauf pendant les burpees). Adrien n'entraîne pas seulement des athlètes, il bâtit une communauté. Son objectif ? Que tu te sentes ici comme à la maison et que tu sois fier(e) de ce dont tu es capable.",
            image: "/assets/optimized/coach-adrien.webp",
            position: "object-top"
        },
        {
            name: "Loris Duval",
            role: "Head Coach",
            certifications: ["CrossFit Level 2", "Level 3 (en cours)", "BPJEPS AF"],
            quote: "L'œil de lynx de la box. Loris décortique ta technique pour t'assurer progression et sécurité. Son énergie contagieuse et son exigence te feront dépasser tes limites avec le sourire.",
            image: "/assets/optimized/coach-loris.webp",
            position: "object-[center_20%]"
        },
        {
            name: "Julia",
            role: "Coach",
            certifications: ["CrossFit Level 1 (en cours)"],
            quote: "Patiente, pédagogue et rayonnante. Julia met un point d'honneur à rendre le fitness accessible à tous. Que tu fasses tes premiers squats ou que tu cherches la perf, elle t'accompagne avec passion.",
            image: "/assets/optimized/coach-julia.webp",
            position: "object-top",
        }
    ];

    return (
        <section id="coaches" className="py-24 md:py-32 bg-gray text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">L'Équipe</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Tes Coachs</h2>
                    <p className="text-lg text-black/70 font-body">
                        Au-delà des diplômes d'État classiques, tous nos coachs sont formés à la méthodologie officielle CrossFit. Une exigence unique dans la région pour te garantir le meilleur encadrement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coaches.map((coach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={coach.image}
                                    alt={coach.name}
                                    loading="lazy"
                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${coach.position || 'object-center'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-heading font-bold text-white tracking-wide uppercase">{coach.name}</h3>
                                    <p className="text-wine font-medium uppercase tracking-widest text-sm">{coach.role}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                {coach.quote && (
                                    <blockquote className="text-black/80 font-body italic mb-4 relative text-sm">
                                        <span className="text-3xl text-gray-300 absolute -top-3 -left-1 leading-none">"</span>
                                        <span className="relative z-10 pl-4 block">{coach.quote}</span>
                                    </blockquote>
                                )}

                                {coach.certifications.length > 0 && (
                                    <div className={`${coach.quote ? 'pt-4 border-t border-black/10' : ''}`}>
                                        <ul className="flex flex-wrap gap-2">
                                            {coach.certifications.map((cert, i) => (
                                                <li key={i} className="text-xs bg-gray px-3 py-1 rounded-full font-medium text-black/80">
                                                    {cert}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
