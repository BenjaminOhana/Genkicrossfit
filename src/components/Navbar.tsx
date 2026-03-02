import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'CrossFit', href: '#demystification' },
    { label: 'HYROX', href: '/hyrox' },
    { label: 'Planning', href: '#schedule' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHyroxPage = location.pathname === '/hyrox';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);

        // Smooth scroll if we are on the home page and it's a hash link
        if (!isHyroxPage && href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Wordmark */}
                <a href="/" className="relative z-50 flex items-center group">
                    <span className="text-white font-heading tracking-widest uppercase">
                        <span className="font-light text-white/80 text-sm md:text-base">CrossFit</span>
                        <span className="font-bold text-white ml-2 text-sm md:text-base">Genki</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {(!isHyroxPage ? navItems : [{ label: 'Accueil', href: '/' }]).map((item) => (
                            <a
                                key={item.label}
                                href={isHyroxPage && item.href.startsWith('#') ? `/${item.href}` : item.href}
                                onClick={(e) => {
                                    if (!isHyroxPage && item.href.startsWith('#')) {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }
                                }}
                                className="text-cream/80 hover:text-white font-medium transition-colors text-sm uppercase tracking-wider"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href="https://app.peppy.cool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 min-h-0 text-sm"
                    >
                        Séance d'essai
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cream relative z-50 p-2 -mr-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <div className="flex flex-col items-center gap-8 text-xl">
                        {(!isHyroxPage ? navItems : [{ label: 'Accueil', href: '/' }]).map((item) => (
                            <a
                                key={item.label}
                                href={isHyroxPage && item.href.startsWith('#') ? `/${item.href}` : item.href}
                                onClick={(e) => {
                                    if (!isHyroxPage && item.href.startsWith('#')) {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    } else {
                                        handleNavClick(item.href);
                                    }
                                }}
                                className="text-cream hover:text-wine font-heading uppercase tracking-widest transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="https://app.peppy.cool"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Réserve ta séance gratuite
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
