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
        // Se cache quand un autre CTA est visible à l'écran
        const observer = new IntersectionObserver(
            (entries) => {
                const anyVisible = entries.some(entry => entry.isIntersecting);
                setIsCTAOnScreen(anyVisible);
            },
            { threshold: 0.1 } // Sensibilité augmentée pour se cacher plus vite
        );

        // Observe tous les éléments marqués [data-cta]
        const targets = document.querySelectorAll('[data-cta]');
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
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // smooth spring
                    className="fixed bottom-6 inset-x-0 z-50 md:hidden flex justify-center px-5 pointer-events-none"
                >
                    {/* Style "Pilule flottante" minimaliste et premium */}
                    <a
                        href="https://app.peppy.cool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            pointer-events-auto flex items-center justify-between w-full max-w-[340px]
                            bg-[#121212]/80 backdrop-blur-xl border border-white/10 
                            pl-6 pr-2 py-2 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.5)] 
                            active:scale-[0.97] transition-all
                        "
                    >
                        <div className="flex flex-col py-1">
                            <span className="font-heading uppercase tracking-widest text-[11px] font-bold text-white leading-tight mb-0.5">
                                Séance gratuite
                            </span>
                            <span className="text-[9px] font-body tracking-[0.15em] text-white/50 uppercase leading-tight">
                                Sans engagement
                            </span>
                        </div>
                        {/* Bouton rond d'action */}
                        <div className="bg-wine text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
