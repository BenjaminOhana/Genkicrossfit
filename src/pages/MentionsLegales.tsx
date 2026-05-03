import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function MentionsLegales() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Mentions Légales | CrossFit Genki";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', "Mentions légales du site CrossFit Genki — SAS A2MG CrossFit, Talange (57). Informations légales, éditeur, hébergeur, propriété intellectuelle.");
    }, []);

    return (
        <div className="bg-black min-h-screen pt-28 md:pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-wine hover:text-white text-sm font-heading uppercase tracking-widest transition-colors mb-8">
                    ← Retour à l'accueil
                </Link>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">Mentions Légales</h1>
                <p className="text-cream/40 text-sm mb-12 font-body">Dernière mise à jour : 1 avril 2026</p>

                {/* 1. Éditeur */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">1. Éditeur du site</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Le présent site internet <strong className="text-cream/90">crossfitgenki.fr</strong> (ci-après « le Site ») est édité par :
                    </p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-0 list-none">
                        <li><strong className="text-cream/90">Dénomination sociale :</strong> A2MG CROSSFIT</li>
                        <li><strong className="text-cream/90">Nom commercial :</strong> CrossFit Genki</li>
                        <li><strong className="text-cream/90">Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
                        <li><strong className="text-cream/90">Capital social :</strong> 2 000 €</li>
                        <li><strong className="text-cream/90">Siège social :</strong> 52 Rue Saint-François, 57535 Marange-Silvange, France</li>
                        <li><strong className="text-cream/90">Adresse de l'établissement :</strong> 6 Rue des Artisans — Pôle d'activité de Talange Nord, 57525 Talange</li>
                        <li><strong className="text-cream/90">SIREN :</strong> 928 008 853</li>
                        <li><strong className="text-cream/90">SIRET (établissement) :</strong> 928 008 853 00022</li>
                        <li><strong className="text-cream/90">RCS :</strong> Metz — 928 008 853</li>
                        <li><strong className="text-cream/90">Code APE :</strong> 9311Z — Gestion d'installations sportives</li>
                        <li><strong className="text-cream/90">N° TVA intracommunautaire :</strong> FR 83 928008853</li>
                        <li><strong className="text-cream/90">Téléphone :</strong> 06 89 08 26 85</li>
                        <li><strong className="text-cream/90">Email :</strong> contact.crossfitgenki@gmail.com</li>
                    </ul>
                </section>

                {/* 2. Directeur de la publication */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">2. Directeur de la publication</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Le directeur de la publication du Site est <strong className="text-cream/90">Monsieur Adrien Marquis</strong>, en sa qualité de Président de la SAS A2MG CROSSFIT.
                    </p>
                </section>

                {/* 3. Hébergeur */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">3. Hébergeur</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">Le Site est hébergé par :</p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-0 list-none">
                        <li><strong className="text-cream/90">Raison sociale :</strong> Netlify, Inc.</li>
                        <li><strong className="text-cream/90">Adresse :</strong> 44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis</li>
                        <li><strong className="text-cream/90">Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-wine hover:text-white transition-colors underline underline-offset-4">www.netlify.com</a></li>
                    </ul>
                </section>

                {/* 4. Activité */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">4. Activité</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        CrossFit Genki est une salle de sport affiliée CrossFit proposant des cours de CrossFit, de préparation HYROX et un espace d'entraînement en libre accès (Open & Chill). La salle est située à Talange (57), à proximité de Metz et Thionville.
                    </p>
                </section>

                {/* 5. Propriété intellectuelle */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">5. Propriété intellectuelle</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        L'ensemble des contenus présents sur le Site (textes, images, photographies, logos, vidéos, éléments graphiques, icônes, sons, logiciels, mises en page) sont la propriété exclusive de la SAS A2MG CrossFit ou font l'objet d'une autorisation d'utilisation.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de la SAS A2MG CrossFit.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        La marque "CrossFit" est une marque déposée de CrossFit, LLC. CrossFit Genki est un affilié officiel de CrossFit.
                    </p>
                </section>

                {/* 6. Responsabilité */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">6. Limitation de responsabilité</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        La SAS A2MG CrossFit s'efforce de fournir sur le Site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires qui lui fournissent ces informations.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Les informations présentes sur le Site sont données à titre indicatif et sont susceptibles d'évoluer. En particulier, les tarifs et horaires affichés peuvent être modifiés à tout moment.
                    </p>
                </section>

                {/* 7. Liens hypertextes */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">7. Liens hypertextes</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Le Site peut contenir des liens hypertextes vers d'autres sites internet, notamment vers la plateforme de réservation Peppy (app.peppy.cool). La SAS A2MG CrossFit n'exerce aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu ou aux éventuels dommages pouvant résulter de leur consultation.
                    </p>
                </section>

                {/* 8. Données personnelles */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">8. Protection des données personnelles</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits relatifs à vos données personnelles.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Pour en savoir plus sur la collecte et le traitement de vos données, veuillez consulter notre{' '}
                        <Link to="/politique-confidentialite" className="text-wine hover:text-white transition-colors underline underline-offset-4">
                            Politique de Confidentialité
                        </Link>.
                    </p>
                </section>

                {/* 9. Droit applicable */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">9. Droit applicable et juridiction</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Les présentes mentions légales sont régies par le droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux compétents de Metz seront seuls compétents pour connaître de ce litige.
                    </p>
                </section>

                {/* 10. Crédits */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">10. Crédits</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        <strong className="text-cream/90">Conception et développement du site :</strong> Benjamin Poulet — <a href="https://entrepreneuraligne.fr" target="_blank" rel="noopener noreferrer" className="text-wine hover:text-white transition-colors underline underline-offset-4">Entrepreneur Aligné</a>
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        <strong className="text-cream/90">Photographies :</strong> CrossFit Genki — tous droits réservés.
                    </p>
                </section>

                {/* Footer navigation */}
                <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-heading uppercase tracking-widest">
                    <Link to="/cgv" className="text-cream/50 hover:text-wine transition-colors">CGV</Link>
                    <Link to="/politique-confidentialite" className="text-cream/50 hover:text-wine transition-colors">Politique de confidentialité</Link>
                    <Link to="/" className="text-cream/50 hover:text-wine transition-colors">Accueil</Link>
                </div>
            </div>
        </div>
    );
}
