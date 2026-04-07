import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isCTAOnScreen, setIsCTAOnScreen] = useState(false);

    useEffect(() => {
        // Apparaît après avoir scrollé un peu (après le Hero)
        const handleScroll = () => {
            setIsVisible(window.scrollY > window.innerHeight * 0.7);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Se cache quand un autre CTA ou une section contenant des CTAs est visible à l'écran
        const visibleElements = new Set();
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        visibleElements.add(entry.target);
                    } else {
                        visibleElements.delete(entry.target);
                    }
                });
                setIsCTAOnScreen(visibleElements.size > 0);
            },
            { threshold: 0.05 } // Déclenche dès que 5% de la section ou du bouton apparaît
        );

        // Observe tous les boutons [data-cta] ET les sections globales [data-cta-section]
        const targets = document.querySelectorAll('[data-cta], [data-cta-section]');
        targets.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const shouldShow = isVisible && !isCTAOnScreen;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-5 inset-x-0 z-50 md:hidden flex justify-center px-4 pointer-events-none"
                >
                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            pointer-events-auto flex items-center justify-between w-full max-w-[380px]
                            bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/[0.08]
                            pl-7 pr-2.5 py-2.5 rounded-full 
                            shadow-[0_8px_32px_rgba(138,42,43,0.3),0_16px_48px_rgba(0,0,0,0.4)]
                            active:scale-[0.97] transition-all
                        "
                    >
                        <div className="flex flex-col py-0.5">
                            <span className="font-heading uppercase tracking-[0.2em] text-[13px] font-bold text-white leading-tight mb-0.5">
                                Séance gratuite
                            </span>
                            <span className="text-[10px] font-body tracking-[0.15em] text-white/40 uppercase leading-tight">
                                Réserve · Sans engagement
                            </span>
                        </div>
                        {/* Bouton rond d'action avec pulse subtil */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-wine/40 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
                            <div className="relative bg-wine text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-wine/30">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
