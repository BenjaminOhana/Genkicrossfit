import { motion } from 'framer-motion';

export function Coaches() {
    const coaches = [
        {
            name: "Adrien Marquis",
            role: "Fondateur & Owner",
            certifications: ["CrossFit Level 1", "Level 2 en cours"],
            quote: "Mon objectif : que chaque personne se sente comme chez elle chez CrossFit Genki.",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
        },
        {
            name: "Loris Duval",
            role: "Head Coach",
            certifications: ["CrossFit Level 2", "Level 3 en cours", "BPJEPS AF"],
            quote: "Je veux vous aider à devenir la meilleure version de vous-même, avec des entraînements variés et du coaching sur-mesure.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
        },
        {
            name: "Julia",
            role: "Coach",
            certifications: ["CrossFit Level 1 (en cours)"],
            quote: "",
            image: "https://images.unsplash.com/photo-1609899537878-48e0e0b39abf?auto=format&fit=crop&q=80",
        },
        {
            name: "Elaura",
            role: "Coach indépendant",
            certifications: [],
            quote: "",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
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
                        Une équipe de passionnés, diplômés et expérimentés, dédiée à ta progression et ta sécurité.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
