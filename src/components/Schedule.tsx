import { motion } from 'framer-motion';
import { Clock, ExternalLink, Calendar } from 'lucide-react';

const scheduleData = [
    {
        day: "Lundi — Jeudi",
        slots: ["9h00 – 10h00", "12h00 – 13h00", "17h30 – 18h30", "18h30 – 19h30"],
    },
    {
        day: "Vendredi",
        slots: ["12h00 – 13h00", "17h30 – 18h30", "18h30 – 19h30"],
    },
    {
        day: "Samedi",
        slots: ["9h00 – 10h00", "10h00 – 11h00"],
    },
    {
        day: "Dimanche",
        slots: ["Fermé"],
        closed: true,
    }
];

export function Schedule() {
    return (
        <section id="schedule" className="py-24 md:py-32 bg-black text-cream overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Emploi du temps</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-tight text-white">Trouve ton créneau.</h2>
                        <p className="text-lg text-cream/60 font-body">Choisis ta séance, réserve en 2 clics sur Peppy.</p>
                    </motion.div>

                    <motion.a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3 bg-wine text-white px-8 py-4 rounded-2xl font-heading uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-wine/20 hover:shadow-none shrink-0"
                    >
                        <Calendar size={18} />
                        Réserver ma séance
                        <ExternalLink size={16} className="opacity-60" />
                    </motion.a>
                </div>

                {/* Schedule Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
                >
                    {scheduleData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`rounded-2xl border p-6 flex flex-col gap-4 ${item.closed
                                ? 'bg-white/3 border-white/5 opacity-50'
                                : 'bg-zinc-900 border-zinc-800 hover:border-wine/30 transition-colors'
                                }`}
                        >
                            <h3 className={`font-heading uppercase tracking-widest text-xs mb-2 ${item.closed ? 'text-cream/30' : 'text-wine'}`}>
                                {item.day}
                            </h3>
                            <div className="flex flex-col gap-2.5">
                                {item.slots.map((slot, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className={`flex items-center gap-2.5 ${item.closed ? 'text-cream/30' : 'text-cream/80'}`}
                                    >
                                        {!item.closed && <Clock size={13} className="text-wine/60 shrink-0" />}
                                        <span className="text-sm font-body">{slot}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Open & Chill info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16"
                >
                    <div>
                        <span className="text-wine font-heading tracking-widest uppercase text-xs mb-2 block">Open & Chill</span>
                        <p className="text-white font-heading font-bold text-lg">Accès libre à l'espace de cross-training</p>
                        <p className="text-cream/60 text-sm mt-1 font-body">Disponible pendant les horaires d'ouverture de la box · Inclus dans tous les abonnements</p>
                    </div>
                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cta
                        className="btn-secondary shrink-0 whitespace-nowrap"
                    >
                        Voir le planning complet
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
