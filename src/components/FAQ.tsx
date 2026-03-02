import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isFaqVisible, setIsFaqVisible] = useState(false);

    const faqs = [
        {
            question: "Je n'ai jamais fait de sport, c'est pour moi ?",
            answer: "Absolument. Chaque mouvement est adapté à ton niveau. Tu progresses à ton rythme, encadré par un coach certifié. Le CrossFit est fait pour tout le monde, pas seulement les athlètes."
        },
        {
            question: "Le CrossFit, c'est pas trop violent ?",
            answer: "Non. L'intensité est relative et toujours contrôlée. Nos coachs t'apprennent d'abord les bons mouvements, puis augmentent progressivement l'intensité selon ta forme et tes capacités. La sécurité passe toujours en premier."
        },
        {
            question: "Comment se passe la première séance ?",
            answer: "Tu réserves ton créneau sur Peppy, tu viens 10 minutes avant pour qu'on fasse connaissance, et le coach adapte le WOD (entraînement du jour) à ton niveau. C'est aussi simple que ça."
        },
        {
            question: "C'est quoi HYROX ?",
            answer: "HYROX est une compétition de fitness indoor qui alterne course et exercices fonctionnels. Chez Genki, on te prépare spécifiquement pour ces épreuves avec des entraînements dédiés."
        },
        {
            question: "Quels sont les horaires ?",
            answer: "Du lundi au samedi, avec des cours dès 9h et la dernière séance à 20h30. Le dimanche est un jour de repos. Consulte notre planning pour les créneaux exacts."
        },
        {
            question: "Il faut un engagement minimum ?",
            answer: "Non. On propose un essai gratuit et il n'y a pas de contrat longue durée. Tu viens, tu testes, et tu décides en toute liberté."
        },
        {
            question: "Où est la salle ?",
            answer: "Au Pôle d'activité de Talange Nord (57525 Talange), avec un parking gratuit juste devant. Facile d'accès depuis Metz et Thionville."
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-gray text-black relative">
            <div className="max-w-4xl mx-auto px-6">

                {!isFaqVisible ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 text-wine">
                            <HelpCircle size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Tu as encore des doutes ?</h2>
                        <p className="text-lg text-black/70 font-body mb-8 max-w-2xl mx-auto">
                            C'est normal de se poser des questions avant de se lancer. On a compilé les plus fréquentes pour toi.
                        </p>
                        <button
                            onClick={() => setIsFaqVisible(true)}
                            className="btn-primary min-w-[280px]"
                        >
                            Consulter la FAQ
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col"
                    >
                        <div className="text-center mb-16 relative">
                            <button
                                onClick={() => setIsFaqVisible(false)}
                                className="absolute left-0 top-1/2 -translate-y-1/2 text-black/50 hover:text-wine font-medium text-sm transition-colors md:flex items-center gap-2 hidden"
                            >
                                <Minus size={16} /> Fermer
                            </button>

                            <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">F.A.Q</span>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Questions Fréquentes</h2>
                        </div>

                        <div className="space-y-4 mb-16">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                        className={`border overflow-hidden transition-all duration-300 ${isOpen
                                                ? 'bg-white border-wine/20 shadow-md rounded-xl'
                                                : 'bg-white border-black/5 rounded-xl hover:border-black/20'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                                        >
                                            <h3 className={`font-bold text-lg leading-snug transition-colors ${isOpen ? 'text-wine' : 'text-black'}`}>
                                                {faq.question}
                                            </h3>
                                            <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-wine text-white' : 'bg-gray text-black/50 hover:bg-black hover:text-white'
                                                }`}>
                                                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 pt-2 text-black/70 font-body leading-relaxed border-t border-black/5 mt-2">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <button
                                onClick={() => setIsFaqVisible(false)}
                                className="btn-secondary min-w-[280px]"
                            >
                                Masquer les questions
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
