import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-cream border-t border-gray/10 pt-16 pb-8" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-heading tracking-wider">GENKI</h3>
                        <p className="text-cream/70 font-body text-sm max-w-xs">
                            La santé vient en bougeant. Rejoins la communauté CrossFit Genki et transforme ton quotidien.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/crossfitgenki" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-wine transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com/crossfitgenki" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-3 rounded-full hover:bg-wine transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="font-heading text-xl uppercase tracking-wider text-wine">Contact</h4>
                        <div className="space-y-4">
                            <a href="https://maps.app.goo.gl/xxx" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-cream/80 hover:text-white transition-colors group">
                                <MapPin size={20} className="shrink-0 mt-1 text-wine" />
                                <span className="text-sm">Pôle d'activité de Talange Nord<br />57525 Talange</span>
                            </a>
                            <a href="tel:+33689082685" className="flex items-center gap-3 text-cream/80 hover:text-white transition-colors">
                                <Phone size={20} className="shrink-0 text-wine" />
                                <span className="text-sm">06 89 08 26 85</span>
                            </a>
                            <a href="mailto:contact.crossfitgenki@gmail.com" className="flex items-center gap-3 text-cream/80 hover:text-white transition-colors">
                                <Mail size={20} className="shrink-0 text-wine" />
                                <span className="text-sm break-all">contact.crossfitgenki@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="font-heading text-xl uppercase tracking-wider text-wine">Horaires</h4>
                        <ul className="space-y-3 text-sm text-cream/80">
                            <li className="flex justify-between">
                                <span>Lun - Jeu</span>
                                <span className="text-right">09:00 - 10:00<br />12:00 - 14:00<br />16:30 - 20:30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Vendredi</span>
                                <span className="text-right">12:00 - 14:00<br />16:30 - 20:30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi</span>
                                <span className="text-right">09:00 - 12:00</span>
                            </li>
                            <li className="flex justify-between text-wine/80">
                                <span>Dimanche</span>
                                <span>Fermé</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-heading text-xl uppercase tracking-wider text-wine">Liens</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#demystification" className="text-cream/80 hover:text-white transition-colors">Le CrossFit</a></li>
                            <li><a href="#pricing" className="text-cream/80 hover:text-white transition-colors">Tarifs</a></li>
                            <li><a href="/hyrox" className="text-cream/80 hover:text-white transition-colors">Programme HYROX</a></li>
                            <li className="pt-2">
                                <a href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/" target="_blank" rel="noopener noreferrer" className="text-wine font-medium hover:underline underline-offset-4">
                                    Réserver une séance
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="pt-8 border-t flex flex-col items-center gap-6 pb-6">
                    <p className="text-cream text-lg md:text-xl font-heading tracking-widest text-center uppercase">
                        Rejoins la communauté.<br className="md:hidden" /> <span className="text-wine">100% sans engagement.</span>
                    </p>
                    <a
                        href="https://app.peppy.cool/quicksell/clx0f0ehe4481031hn2h27ij4yj/book/trial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Réserver ma séance gratuite
                    </a>
                </div>

                <div className="pt-8 border-t border-gray/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/50">
                    <p>&copy; {currentYear} CrossFit Genki. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
                        <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
