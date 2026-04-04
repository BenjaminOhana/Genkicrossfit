import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
    const mainPlans = [
        {
            name: "Essentiel",
            price: "55€",
            period: "/ mois",
            description: "Sport et flexibilité à ton rythme.",
            features: [
                "5 séances de CrossFit / mois",
                "Accès à l'espace Open & Chill",
                "🔥 **Sans engagement**"
            ],
            cta: "S'inscrire",
            highlight: false,
            tag: null
        },
        {
            name: "Full Access",
            price: "95€",
            period: "/ mois",
            description: "L'expérience CrossFit complète.",
            features: [
                "Accès à tous les WODs (CrossFit & HYROX)",
                "Accès illimité Open & Chill",
                "🔥 **Sans engagement**"
            ],
            cta: "S'inscrire",
            highlight: true,
            tag: "Le plus populaire"
        },
        {
            name: "Carnet 10 Séances",
            price: "170€",
            period: "",
            description: "La liberté totale. Tu paies ce que tu consommes.",
            features: [
                "10 crédits de réservation",
                "Valable 6 mois",
                "🔥 **Zéro abonnement**"
            ],
            cta: "Acheter un carnet",
            highlight: false,
            tag: null
        }
    ];

    return (
        <section id="pricing" className="py-24 md:py-32 bg-gray text-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-20"
                >
                    <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Découvrir</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Tarifs Sans Surprise</h2>
                    <p className="text-lg text-black/60 font-body italic">
                        Pas de contrat long. Pas de frais cachés. Juste du sport et du kiff.
                    </p>
                </motion.div>

                {/* Main Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {mainPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`rounded-2xl flex flex-col relative overflow-hidden transition-all duration-300 will-change-transform will-change-opacity ${plan.highlight
                                ? 'bg-black text-cream shadow-2xl scale-100 md:scale-105 z-10 border-none'
                                : 'bg-white border border-black/10 shadow-sm hover:shadow-xl hover:-translate-y-2'
                                }`}
                        >
                            {plan.tag && (
                                <div className={`absolute top-0 inset-x-0 text-center text-xs font-heading uppercase tracking-widest py-2.5 flex items-center justify-center gap-2 ${plan.highlight ? 'bg-wine text-white' : 'bg-wine/10 text-wine'
                                    }`}>
                                    <Sparkles size={12} />
                                    {plan.tag}
                                </div>
                            )}

                            <div className={`p-8 md:p-12 ${plan.tag ? 'pt-16' : ''} flex-grow flex flex-col`}>
                                <h3 className="text-3xl font-heading uppercase tracking-wider mb-3">{plan.name}</h3>
                                <p className={`text-base mb-8 flex-grow ${plan.highlight ? 'text-cream/70' : 'text-black/60'}`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-2 mb-10 pb-10 border-b border-black/10">
                                    <span className={`text-6xl font-bold tracking-tight ${plan.highlight ? 'text-white border-white/10' : 'text-black border-black/10'}`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={`text-xl font-medium ${plan.highlight ? 'text-cream/50' : 'text-black/50'}`}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-5 mb-10 text-base">
                                    {plan.features.map((feature, i) => {
                                        const isHighlightFeature = feature.includes("Sans engagement") || feature.includes("Zéro abonnement");
                                        return (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check size={20} className={`shrink-0 ${plan.highlight ? 'text-wine' : 'text-black'} ${isHighlightFeature ? 'mt-0.5' : ''}`} />
                                                <span className={`text-sm ${plan.highlight ? 'text-cream/90' : 'text-black/80'}`}>
                                                    {isHighlightFeature ? (
                                                        <span className={plan.highlight ? 'text-white font-bold' : 'text-wine font-bold'}>
                                                            {feature.replace('🔥 **', '🔥 ').replace('**', '')}
                                                        </span>
                                                    ) : (
                                                        feature
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="p-8 md:p-12 pt-0 mt-auto">
                                <a
                                    href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/offers/"
                                    data-cta
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full block text-center uppercase tracking-widest text-base font-heading py-5 transition-colors rounded-2xl ${plan.highlight
                                        ? 'bg-wine text-white hover:bg-white hover:text-black shadow-lg hover:shadow-xl'
                                        : 'bg-black text-white hover:bg-wine shadow hover:shadow-lg'
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Étudiants / FDO Discount Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto flex items-center justify-center gap-3 bg-white/50 border border-black/5 rounded-xl p-4 md:p-5 mb-20 text-center"
                >
                    <div className="shrink-0 bg-wine/10 text-wine w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-heading font-bold text-lg">%</span>
                    </div>
                    <p className="text-sm md:text-base text-black/70 flex-1 max-w-lg">
                        <strong className="text-black font-medium">Étudiants & Forces de l'ordre : </strong>
                        Bénéficiez de <span className="text-wine font-bold">~37% de réduction</span> (60€/mois sur l'abonnement Full Access au lieu de 95€) sur présentation de justificatif.
                    </p>
                </motion.div>

                {/* Essayez d'abord CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="flex flex-col items-center justify-center mb-16 space-y-4"
                >
                    <p className="text-black/80 font-medium text-lg text-center">
                        Tu hésites encore ? Viens tester gratuitement
                    </p>
                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Je veux essayer d'abord
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
