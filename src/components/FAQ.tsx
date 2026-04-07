import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isFaqVisible, setIsFaqVisible] = useState(false);

    const faqs = [
        {
            question: "Je n'ai jamais fait de sport, c'est pour moi ?",
            answer: "Absolument. La majorité de nos membres n'étaient pas sportifs en arrivant. Chaque mouvement est adapté à ton niveau par un coach certifié CrossFit. Tu progresses à ton rythme."
        },
        {
            question: "Le CrossFit, c'est pas trop violent / intense ?",
            answer: "Non. L'intensité est relative et toujours contrôlée par un coach certifié. C'est toi qui décides de ton effort. Le coach est là pour t'accompagner, pas pour te pousser au-delà de tes limites."
        },
        {
            question: "Comment se passe la première séance ?",
            answer: "Tu réserves en ligne en 2 clics, tu viens 10 min avant, on t'accueille et on te briefe. Le coach adapte l'entraînement du jour à ton niveau. Tu repars avec le sourire."
        },
        {
            question: "C'est quoi HYROX ?",
            answer: "HYROX est un format de compétition fitness qui mélange course à pied et exercices fonctionnels. Chez CrossFit Genki, on propose de vrais cours spécifiques HYROX avec des thèmes d'entraînement créés par Aerox. Plus de 50 personnes déjà préparées."
        },
        {
            question: "Quels sont les horaires ?",
            answer: "Lundi à jeudi : 9h-10h, 12h-14h, 16h30-20h30. Vendredi : 12h-14h, 16h30-20h30. Samedi : 9h-12h. Dimanche : fermé (ouverture prochaine)."
        },
        {
            question: "Il faut un engagement minimum ?",
            answer: "Non. Toutes nos offres sont sans engagement. Tu peux commencer par une séance d'essai gratuite, puis choisir la formule qui te convient. Pas de contrat long, pas de piège."
        },
        {
            question: "Où est la salle exactement ?",
            answer: "Pôle d'activité de Talange Nord, 57525 Talange, à côté de XL Enseigne. Facile d'accès en voiture depuis Metz (12 min) et Thionville (15 min). Parking gratuit."
        },
        {
            question: "Combien coûte l'abonnement ?",
            answer: "À partir de 55€/mois pour 5 séances. Le Full Access (le plus populaire) est à 95€/mois pour jusqu'à 5 séances par semaine. Offres étudiants et forces de l'ordre disponibles. Toutes les offres sont sans engagement."
        },
        {
            question: "Est-ce que CrossFit Genki est une salle affiliée CrossFit ?",
            answer: "Oui. CrossFit Genki est officiellement affiliée à CrossFit depuis 2024. Nos coachs sont certifiés CrossFit (Level 1, Level 2). C'est un gage de qualité et de méthodologie certifiée."
        },
        {
            question: "Qu'est-ce qui différencie CrossFit Genki des autres salles ?",
            answer: "L'ambiance familiale, le coaching certifié et personnalisé, une box à taille humaine de 400 m², des offres sans engagement, et une communauté soudée. C'est ce qui ressort de nos 38 avis Google, tous à 5 étoiles."
        }
    ];

    return (
        <section id="faq" className="py-24 md:py-32 bg-gray text-black relative">
            <div className="max-w-4xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col"
                >
                    <div className="text-center mb-16">
                        <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">F.A.Q</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-8">Questions Fréquentes</h2>
                        
                        {!isFaqVisible && (
                            <motion.button 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                onClick={() => setIsFaqVisible(true)}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-md text-black font-heading font-bold uppercase tracking-widest hover:bg-wine hover:text-white transition-all duration-300 group"
                            >
                                Voir les questions
                                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                            </motion.button>
                        )}
                    </div>

                    <AnimatePresence>
                        {isFaqVisible && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-4 mb-16 overflow-hidden"
                            >
                                {faqs.map((faq, index) => {
                                    const isOpen = openIndex === index;

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                            className={`border overflow-hidden transition-colors duration-500 transform-gpu isolate ${isOpen
                                                    ? 'bg-white border-wine/20 shadow-md rounded-xl'
                                                    : 'bg-white border-black/5 rounded-xl hover:border-black/20 hover:shadow-sm'
                                                }`}
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                                            >
                                                <h3 className={`font-bold text-lg leading-snug transition-colors duration-300 ${isOpen ? 'text-wine' : 'text-black'}`}>
                                                    {faq.question}
                                                </h3>
                                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-wine text-white' : 'bg-gray text-black/50 group-hover:bg-black group-hover:text-white'
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
                                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="text-center">
                        <a
                            href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cta
                            className="btn-primary min-w-[280px]"
                        >
                            Réserve ta séance d'essai gratuite
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
