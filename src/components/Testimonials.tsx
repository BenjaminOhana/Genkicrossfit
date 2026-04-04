import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Testimonials() {
    const reviews = [
        {
            name: "Virginie T.",
            text: "Salle incroyable ! Coachs passionnés, très pros et toujours là pour nous faire progresser en toute sécurité. Super ambiance.",
            rating: 5,
        },
        {
            name: "Jessica B.",
            text: "Enfin une box avec un coaching de HAUTE qualité. Rien n'est laissé au hasard.",
            rating: 5,
        },
        {
            name: "JC",
            text: "Un an déjà et toujours autant de plaisir. Coaching de qualité et résultats au rendez-vous.",
            rating: 5,
        },
        {
            name: "Melanie O.",
            text: "Je suis venue pour le sport et j'ai trouvé une chouette ambiance. Les coachs savent s'adapter à chacun.",
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
                        <span className="text-sm font-body text-cream/70">38 avis Google</span>
                    </motion.div>
                </div>

                <div
                    className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        #testimonials .flex::-webkit-scrollbar { display: none; }
                    `}} />
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl relative min-w-[85vw] sm:min-w-[350px] md:min-w-0 md:w-auto flex-none flex flex-col justify-between"
                        >
                            <div className="flex text-wine mb-4 md:mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-sm md:text-base text-cream/90 font-body mb-6 md:mb-8 italic line-clamp-4 md:line-clamp-none">"{review.text}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 bg-wine/20 rounded-full flex items-center justify-center text-wine font-heading font-bold text-lg uppercase shrink-0">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-heading text-white uppercase tracking-wider text-sm truncate">{review.name}</h4>
                                    <span className="text-xs text-cream/50">Google Reviews</span>
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
                    <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/" data-cta target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Réserve ta séance d'essai gratuite
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
