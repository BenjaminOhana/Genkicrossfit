import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HyroxBanner() {
    return (
        <section className="relative py-24 bg-black overflow-hidden flex items-center border-y border-white/5">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80')] bg-cover bg-center md:bg-right opacity-30 mix-blend-luminosity grayscale"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <div className="inline-block px-3 py-1 border border-wine/50 bg-wine/10 text-wine text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm">
                        Nouveau Programme
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tight mb-4 leading-none">
                        Dépasse tes limites,<br />découvre <span className="text-wine">HYROX</span>
                    </h2>
                    <p className="text-cream/70 font-body text-base md:text-lg mb-8 leading-relaxed max-w-md">
                        Tu cherches à te challenger sans la technique de l'haltérophilie ? Rejoins notre préparation HYROX, le sport hybride mondialement reconnu.
                    </p>
                    <a
                        href="/hyrox"
                        className="inline-flex items-center gap-3 text-white font-medium tracking-widest uppercase transition-all duration-300 relative group text-sm md:text-base"
                    >
                        <span className="relative z-10 group-hover:text-wine transition-colors">Découvrir l'expérience HYROX</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-wine transition-all" />
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-wine transition-all group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden md:block opacity-10 pointer-events-none select-none text-[20rem] font-heading font-bold text-white leading-none absolute -right-20 -bottom-16"
                >
                    HYROX
                </motion.div>
            </div>
        </section>
    );
}
