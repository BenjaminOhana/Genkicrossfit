import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
    const reviews = [
        {
            name: "Camille S.",
            text: "J'ai récemment découvert CrossFit Genki, et je suis absolument ravie ! L'équipe est accueillante, professionnelle et vraiment attentive à chaque personne, quel que soit son niveau.",
            rating: 5,
        },
        {
            name: "Nicolas",
            text: "Super ambiance, coachs motivants et très pros ! Les séances sont variées, bien encadrées, et l'esprit de communauté est top.",
            rating: 5,
        },
        {
            name: "Pauline S.",
            text: "Au menu : bienveillance et dépassement de soi. Je recommande à 1000%.",
            rating: 5,
        },
        {
            name: "Amélie R.",
            text: "Les coachs sont à l'écoute, hyper abordables, vraiment au top pour débuter et progresser !",
            rating: 5,
        }
    ];

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-black text-cream overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Avis Clients</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-white">Ce qu'ils en disent.</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-full border border-white/10"
                    >
                        <span className="text-3xl font-heading text-white font-bold tracking-wider pt-1">5.0</span>
                        <div className="flex text-wine">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-sm font-body text-cream/70">7 avis Google</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative"
                        >
                            <div className="flex text-wine mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-base text-cream/90 font-body mb-8 italic">"{review.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-wine/20 rounded-full flex items-center justify-center text-wine font-heading font-bold text-lg uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-heading text-white uppercase tracking-wider text-sm">{review.name}</h4>
                                    <span className="text-xs text-cream/50">Via Google Reviews</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg text-cream/70 font-body mb-8">
                        Rejoins-les. Réserve ta séance d'essai gratuite.
                    </p>
                    <a href="https://app.peppy.cool" data-cta target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Réserve ta séance d'essai gratuite
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
