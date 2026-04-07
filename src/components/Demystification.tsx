import { motion } from 'framer-motion';

export function Demystification() {
    const points = [
        {
            number: "01",
            imageMobile: "/assets/optimized/adapte.webp",
            imageDesktop: "/assets/optimized/adapte.webp",
            title: "Adapté à toi",
            description: "Chaque mouvement est adapté à ton niveau. Que tu n'aies jamais mis les pieds dans une salle ou que tu sois sportif depuis 10 ans — ta place est ici.",
            bgPosMobile: "center",
        },
        {
            number: "02",
            imageMobile: "/assets/optimized/intensite-mobile.webp",
            imageDesktop: "/assets/optimized/intensite-desktop.webp",
            title: "L'intensité, c'est toi qui la choisis",
            description: "On ne te demande pas d'aller au bout de tes limites dès le premier jour. L'intensité est relative et toujours encadrée par un coach certifié.",
            bgPosMobile: "center",
        },
        {
            number: "03",
            imageMobile: "/assets/optimized/IMG_5941.webp",
            imageDesktop: "/assets/optimized/famille-desktop.webp",
            title: "Plus qu'un sport, une famille",
            description: "Ici les gens se connaissent, s'encouragent, font des sorties ensemble. Tu viens pour le sport, tu restes pour les gens.",
            bgPosMobile: "center 125%",
        }
    ];

    return (
        <section id="demystification" className="py-24 md:py-32 bg-cream text-[#1a1a1a] relative">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header with HUGE Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-24"
                >
                    <img
                        src="/assets/optimized/crossfit-genki-logo.svg"
                        alt="CrossFit Genki"
                        loading="lazy"
                        className="h-64 sm:h-72 md:h-96 w-auto object-contain mx-auto mb-10"
                    />
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold tracking-tight">Tu as ta place ici, peu importe ton niveau.</h2>
                </motion.div>

                {/* Numbered Image Cards */}
                <div className="space-y-6 md:space-y-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                            transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-700 cursor-default bg-[#1a1a1a]"
                            style={{ minHeight: '420px', WebkitBackfaceVisibility: 'hidden', WebkitTransform: 'translate3d(0,0,0)' }}
                        >
                            {/* Background Image — effet focus au scroll */}
                            <div className="absolute inset-0 z-0 overflow-hidden bg-black">
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0.45, scale: 1 }}
                                            whileInView={{ opacity: 0.90, scale: 1.05 }}
                                            viewport={{ margin: "-25% 0px -25% 0px", amount: 0.4 }} 
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="w-full h-full bg-cover bg-center group-hover:!opacity-100 group-hover:!scale-105 transition-transform duration-1000 ease-out md:hidden will-change-transform will-change-opacity"
                                            style={{ backgroundImage: `url('${point.imageMobile}')`, backgroundPosition: point.bgPosMobile }}
                                        ></motion.div>
                                        <motion.div
                                            initial={{ opacity: 0.45, scale: 1 }}
                                            whileInView={{ opacity: 0.90, scale: 1.05 }}
                                            viewport={{ margin: "-25% 0px -25% 0px", amount: 0.4 }} 
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="w-full h-full bg-cover bg-center group-hover:!opacity-100 group-hover:!scale-105 transition-transform duration-1000 ease-out hidden md:block will-change-transform will-change-opacity"
                                            style={{ backgroundImage: `url('${point.imageDesktop}')` }}
                                        ></motion.div>
                                    </>
                            </div>

                            {/* Voile léger uniforme pour lisibilité du texte */}
                            <div className="absolute inset-0 z-[5] bg-black/25"></div>

                            {/* Gradient — fort en bas pour le texte, léger en haut */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-black/10"></div>

                            {/* Badge numéroté — coin haut gauche, style glassmorphism affiné */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-4">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-2 flex items-center justify-center shadow-xl">
                                    <span className="text-white font-heading font-bold tracking-widest text-lg leading-none drop-shadow-md">
                                        {point.number}
                                    </span>
                                </div>
                                <div className="h-[2px] w-8 md:w-12 bg-white/30"></div>
                            </div>

                            {/* Left accent bar — visible on hover */}
                            <div className="absolute left-0 top-0 w-1 md:w-[3px] h-full bg-wine transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom z-20"></div>

                            {/* Content Box — ancré en bas, avec focus au scroll */}
                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-7 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px 0px -10% 0px" }} 
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 transform transition-transform duration-500 group-hover:-translate-y-1"
                                >
                                    <div className="flex-1 max-w-2xl">
                                        <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-wide mb-3 text-white">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/75 leading-relaxed font-body text-base md:text-lg group-hover:text-white/90 transition-colors duration-500">
                                            {point.description}
                                        </p>
                                    </div>

                                    {/* Flèche déco desktop */}
                                    <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/0 group-hover:text-white group-hover:border-white/50 transition-all duration-500 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-20 text-center"
                >
                    <p className="text-xl text-[#1a1a1a]/60 font-body italic mb-8 max-w-2xl mx-auto">
                        Un essai suffit. Réserve le tien.
                    </p>
                    <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/" data-cta target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-5 shadow-xl hover:shadow-2xl">
                        Essaie gratuitement
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
