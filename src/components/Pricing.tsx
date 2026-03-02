import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
    const mainPlans = [
        {
            name: "Séance d'essai",
            price: "Gratuite",
            period: "",
            description: "Viens tester sans engagement. Zéro risque, zéro pression.",
            features: [
                "Évaluation de ton niveau",
                "Initiation aux mouvements de base",
                "Participation à un WOD adapté",
                "Visite complète de la box"
            ],
            cta: "Réserver ma séance gratuite",
            highlight: true,
            tag: "Idéal pour commencer"
        },
        {
            name: "Full Access",
            price: "95€",
            period: "/ mois",
            description: "Jusqu'à 5 séances de coaching par semaine.",
            features: [
                "5 séances de coaching / semaine",
                "Accès Open & Chill illimité",
                "Programmation personnalisée",
                "Communauté & événements"
            ],
            cta: "S'inscrire",
            highlight: false,
            tag: "Le plus populaire"
        },
        {
            name: "10 Séances",
            price: "75€",
            period: "/ mois",
            description: "10 séances de coaching par mois. Flexible et efficace.",
            features: [
                "10 séances de coaching / mois",
                "Accès Open & Chill illimité",
                "Programmation disponible",
                "Sans engagement"
            ],
            cta: "S'inscrire",
            highlight: false,
            tag: null
        }
    ];

    const secondaryPlans = [
        { name: "5 séances", price: "55€/mois" },
        { name: "Étudiant", price: "60€/mois" },
        { name: "Force de l'ordre", price: "70€/mois" },
        { name: "Kids", price: "30€/mois" },
    ];

    const cartes = [
        { name: "10 séances CrossFit + HYROX", price: "170€" },
        { name: "5 séances", price: "95€" },
        { name: "Pack découverte", price: "2 offertes" },
        { name: "Unité", price: "20€" },
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
                    <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Nos Offres</span>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Tarifs Sans Surprise</h2>
                </motion.div>

                {/* Main Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {mainPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`rounded-2xl flex flex-col relative overflow-hidden transition-all duration-300 ${plan.highlight
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

                            <div className={`p-8 md:p-10 ${plan.tag ? 'pt-14' : ''} flex-grow`}>
                                <h3 className="text-2xl font-heading uppercase tracking-wider mb-2">{plan.name}</h3>
                                <p className={`text-sm mb-6 ${plan.highlight ? 'text-cream/70' : 'text-black/60'}`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className={`text-5xl font-bold tracking-tight ${plan.highlight ? 'text-white' : 'text-black'}`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={`text-lg font-medium ${plan.highlight ? 'text-cream/50' : 'text-black/50'}`}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={20} className={`shrink-0 ${plan.highlight ? 'text-wine' : 'text-black'}`} />
                                            <span className={`text-sm ${plan.highlight ? 'text-cream/90' : 'text-black/80'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <a
                                    href="https://app.peppy.cool"
                                    data-cta
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full block text-center uppercase tracking-widest text-sm font-heading py-4 transition-colors rounded-xl ${plan.highlight
                                        ? 'bg-wine text-white hover:bg-white hover:text-black'
                                        : 'bg-black text-white hover:bg-wine'
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Plans */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h3 className="text-2xl font-heading uppercase tracking-wider text-center mb-8">Abonnements mensuels</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {secondaryPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white border border-black/10 rounded-xl p-6 text-center hover:border-wine/30 transition-colors"
                            >
                                <h4 className="font-heading uppercase tracking-wider text-sm mb-2">{plan.name}</h4>
                                <span className="text-2xl font-bold text-black">{plan.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Cartes sans abo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-heading uppercase tracking-wider text-center mb-8">Cartes sans abonnement</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cartes.map((carte, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white border border-black/10 rounded-xl p-6 text-center hover:border-wine/30 transition-colors"
                            >
                                <h4 className="font-heading uppercase tracking-wider text-sm mb-2">{carte.name}</h4>
                                <span className="text-2xl font-bold text-black">{carte.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-lg text-black/60 font-body italic"
                >
                    <p>Pas de contrat long. Pas de frais cachés. Juste du sport et du kiff.</p>
                </motion.div>
            </div>
        </section>
    );
}
