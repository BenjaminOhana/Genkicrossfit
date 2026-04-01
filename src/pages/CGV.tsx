import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CGV() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Conditions Générales de Vente | CrossFit Genki";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', "Conditions générales de vente de CrossFit Genki — SAS A2MG CrossFit, Talange (57). Abonnements, tarifs, résiliation, droit de rétractation.");
    }, []);

    return (
        <div className="bg-black min-h-screen pt-28 md:pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-wine hover:text-white text-sm font-heading uppercase tracking-widest transition-colors mb-8">
                    ← Retour à l'accueil
                </Link>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">Conditions Générales de Vente</h1>
                <p className="text-cream/40 text-sm mb-12 font-body">Dernière mise à jour : 1 avril 2026</p>

                {/* 1. Objet */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">1. Objet</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre la <strong className="text-cream/90">SAS A2MG CrossFit</strong>, exploitant la salle de sport sous l'enseigne <strong className="text-cream/90">CrossFit Genki</strong>, et toute personne physique (ci-après « l'Adhérent ») souhaitant bénéficier des services proposés.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Toute inscription ou réservation vaut acceptation pleine et entière des présentes CGV.
                    </p>
                </section>

                {/* 2. Prestataire */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">2. Le prestataire</h2>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-0 list-none">
                        <li><strong className="text-cream/90">SAS A2MG CROSSFIT</strong> (CrossFit Genki) — Capital social : 2 000 €</li>
                        <li>Siège social : 52 Rue Saint-François, 57535 Marange-Silvange</li>
                        <li>Établissement : 6 Rue des Artisans — Pôle d'activité de Talange Nord, 57525 Talange</li>
                        <li>SIRET : 928 008 853 00022 — RCS Metz — APE 9311Z</li>
                        <li>TVA : FR 83 928008853</li>
                        <li>Téléphone : 06 89 08 26 85</li>
                        <li>Email : contact.crossfitgenki@gmail.com</li>
                    </ul>
                </section>

                {/* 3. Services */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">3. Services proposés</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">CrossFit Genki propose les services suivants :</p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li><strong className="text-cream/90">Cours de CrossFit</strong> — séances en groupe encadrées par des coachs certifiés CrossFit, adaptées à tous les niveaux ;</li>
                        <li><strong className="text-cream/90">Préparation HYROX</strong> — cours spécifiques de préparation aux compétitions HYROX ;</li>
                        <li><strong className="text-cream/90">Open & Chill</strong> — accès à l'espace d'entraînement en libre accès (120 m²) durant les heures d'ouverture ;</li>
                        <li><strong className="text-cream/90">Séance d'essai gratuite</strong> — première séance offerte et sans engagement.</li>
                    </ul>
                </section>

                {/* 4. Tarifs */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">4. Tarifs et formules</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Les tarifs en vigueur sont affichés sur le Site et en salle. Les principales formules sont :
                    </p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li>Séance d'essai : <strong className="text-cream/90">gratuite</strong></li>
                        <li>Drop-in (séance à l'unité) : <strong className="text-cream/90">20 €</strong></li>
                        <li>Abonnement 5 séances/mois : <strong className="text-cream/90">55 €/mois</strong></li>
                        <li>Abonnement 10 séances/mois : <strong className="text-cream/90">75 €/mois</strong></li>
                        <li>Full Access (jusqu'à 5 séances/semaine) : <strong className="text-cream/90">95 €/mois</strong></li>
                        <li>Étudiant (10 séances/mois, sur justificatif) : <strong className="text-cream/90">60 €/mois</strong></li>
                        <li>Forces de l'ordre (10 séances/mois, sur justificatif) : <strong className="text-cream/90">70 €/mois</strong></li>
                        <li>Kids (1 séance/semaine) : <strong className="text-cream/90">30 €/mois</strong></li>
                        <li>Carte 5 séances : <strong className="text-cream/90">95 €</strong></li>
                        <li>Carte 10 séances : <strong className="text-cream/90">170 €</strong></li>
                    </ul>
                    <p className="text-cream/70 font-body leading-relaxed mt-3">
                        Les tarifs sont indiqués en euros TTC. La SAS A2MG CrossFit se réserve le droit de modifier ses tarifs à tout moment. Toute modification sera communiquée aux adhérents au moins 30 jours avant son entrée en vigueur.
                    </p>
                </section>

                {/* 5. Sans engagement */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">5. Abonnements sans engagement</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        <strong className="text-cream/90">Toutes les formules d'abonnement sont sans engagement de durée.</strong> L'adhérent peut résilier son abonnement à tout moment, sans frais ni pénalité.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        La résiliation prend effet à la fin de la période mensuelle en cours. Aucun remboursement au prorata ne sera effectué pour le mois entamé.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Les cartes de séances (5 ou 10 séances) sont valables 6 mois à compter de la date d'achat. Passé ce délai, les séances non utilisées seront perdues et ne donneront lieu à aucun remboursement.
                    </p>
                </section>

                {/* 6. Inscription et réservation */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">6. Inscription et réservation</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        L'inscription et la réservation des séances s'effectuent via la plateforme <strong className="text-cream/90">Peppy</strong> (app.peppy.cool), plateforme tierce dont les propres conditions générales s'appliquent en complément des présentes.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        L'adhérent s'engage à fournir des informations exactes et à jour lors de son inscription. Toute réservation de séance est personnelle et incessible.
                    </p>
                </section>

                {/* 7. Paiement */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">7. Modalités de paiement</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Le paiement s'effectue via la plateforme Peppy par carte bancaire ou par tout autre moyen de paiement proposé. Les abonnements mensuels sont prélevés automatiquement chaque mois à la date anniversaire de la souscription.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        En cas d'échec de paiement, l'accès aux services pourra être suspendu jusqu'à régularisation.
                    </p>
                </section>

                {/* 8. Droit de rétractation */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">8. Droit de rétractation</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Conformément aux articles L221-18 et suivants du Code de la consommation, l'adhérent dispose d'un <strong className="text-cream/90">délai de 14 jours</strong> à compter de la souscription pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Toutefois, conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les services pleinement exécutés avant la fin du délai de rétractation si l'exécution a commencé avec l'accord préalable exprès de l'adhérent et le renoncement exprès à son droit de rétractation.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Pour exercer ce droit, l'adhérent doit adresser une demande par email à <strong className="text-cream/90">contact.crossfitgenki@gmail.com</strong> ou par courrier à l'adresse du siège social.
                    </p>
                </section>

                {/* 9. Règles intérieures */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">9. Règlement intérieur et comportement</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">L'adhérent s'engage à :</p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li>Respecter le règlement intérieur de la salle, affiché dans les locaux ;</li>
                        <li>Suivre les consignes de sécurité et les instructions des coachs ;</li>
                        <li>Utiliser le matériel de manière appropriée et le ranger après utilisation ;</li>
                        <li>Adopter un comportement respectueux envers les autres adhérents et le personnel ;</li>
                        <li>Fournir un certificat médical de non-contre-indication à la pratique sportive si demandé.</li>
                    </ul>
                    <p className="text-cream/70 font-body leading-relaxed mt-3">
                        Tout comportement inapproprié pourra entraîner l'exclusion de l'adhérent, sans droit à remboursement.
                    </p>
                </section>

                {/* 10. Responsabilité */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">10. Responsabilité</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        La pratique sportive comporte des risques inhérents. L'adhérent déclare être en bonne santé et apte à la pratique du CrossFit et/ou du HYROX Training. Il est vivement recommandé de consulter un médecin avant de démarrer toute activité sportive.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        La SAS A2MG CrossFit ne saurait être tenue responsable en cas de blessures, d'accidents ou de détérioration d'objets personnels survenant dans l'enceinte de la salle, sauf en cas de faute avérée de sa part.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        L'adhérent est invité à souscrire une assurance individuelle couvrant les risques liés à la pratique sportive.
                    </p>
                </section>

                {/* 11. Force majeure */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">11. Force majeure</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        La SAS A2MG CrossFit ne pourra être tenue responsable de l'inexécution de ses obligations en cas de force majeure telle que définie par l'article 1218 du Code civil (catastrophe naturelle, épidémie, décision administrative de fermeture, etc.). Dans ce cas, les obligations seront suspendues pour la durée de l'événement de force majeure.
                    </p>
                </section>

                {/* 12. Données personnelles */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">12. Données personnelles</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Les données personnelles collectées lors de l'inscription sont traitées conformément au RGPD. Pour plus d'informations, consultez notre{' '}
                        <Link to="/politique-confidentialite" className="text-wine hover:text-white transition-colors underline underline-offset-4">
                            Politique de Confidentialité
                        </Link>.
                    </p>
                </section>

                {/* 13. Litiges */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">13. Litiges et médiation</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Les présentes CGV sont régies par le droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Conformément aux articles L611-1 et R612-1 du Code de la consommation, l'adhérent peut recourir gratuitement au service de médiation de la consommation. Le médiateur compétent est :
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed italic">
                        <span className="text-cream/50">[À compléter — nom et coordonnées du médiateur de la consommation choisi par l'entreprise]</span>
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mt-3">
                        À défaut de résolution amiable, les tribunaux compétents de Metz seront seuls compétents.
                    </p>
                </section>

                {/* Footer navigation */}
                <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-heading uppercase tracking-widest">
                    <Link to="/mentions-legales" className="text-cream/50 hover:text-wine transition-colors">Mentions légales</Link>
                    <Link to="/politique-confidentialite" className="text-cream/50 hover:text-wine transition-colors">Politique de confidentialité</Link>
                    <Link to="/" className="text-cream/50 hover:text-wine transition-colors">Accueil</Link>
                </div>
            </div>
        </div>
    );
}
