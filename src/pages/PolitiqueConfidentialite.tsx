import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PolitiqueConfidentialite() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Politique de Confidentialité | CrossFit Genki";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', "Politique de confidentialité et de protection des données personnelles de CrossFit Genki — RGPD, cookies, droits des utilisateurs.");
    }, []);

    return (
        <div className="bg-black min-h-screen pt-28 md:pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Link to="/" className="inline-flex items-center gap-2 text-wine hover:text-white text-sm font-heading uppercase tracking-widest transition-colors mb-8">
                    ← Retour à l'accueil
                </Link>
                <h1 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">Politique de Confidentialité</h1>
                <p className="text-cream/40 text-sm mb-12 font-body">Dernière mise à jour : 31 mars 2026</p>

                {/* Intro */}
                <section className="mb-10">
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        La SAS A2MG CrossFit, exploitant sous l'enseigne <strong className="text-cream/90">CrossFit Genki</strong>, s'engage à protéger la vie privée de ses utilisateurs et adhérents. La présente Politique de Confidentialité décrit les modalités de collecte, d'utilisation et de protection de vos données personnelles conformément au <strong className="text-cream/90">Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679)</strong> et à la <strong className="text-cream/90">Loi Informatique et Libertés du 6 janvier 1978 modifiée</strong>.
                    </p>
                </section>

                {/* 1. Responsable du traitement */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">1. Responsable du traitement</h2>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-0 list-none">
                        <li><strong className="text-cream/90">SAS A2MG CrossFit</strong></li>
                        <li>Pôle d'activité de Talange Nord, 57525 Talange, France</li>
                        <li>Représentée par Adrien Marquis, Président</li>
                        <li>Email : contact.crossfitgenki@gmail.com</li>
                        <li>Téléphone : 06 89 08 26 85</li>
                    </ul>
                </section>

                {/* 2. Données collectées */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">2. Données personnelles collectées</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-4">Selon les interactions, nous pouvons être amenés à collecter :</p>

                    <h3 className="text-cream/90 font-heading uppercase tracking-wider text-sm mb-3">A. Via le site web</h3>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-1 pl-6 list-disc mb-4">
                        <li>Adresse IP (via l'hébergeur Netlify et Google Fonts)</li>
                        <li>Données de navigation (pages visitées, durée, type de navigateur)</li>
                    </ul>

                    <h3 className="text-cream/90 font-heading uppercase tracking-wider text-sm mb-3">B. Via la plateforme Peppy (réservation et inscription)</h3>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-1 pl-6 list-disc mb-4">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Données de paiement (traitées directement par Peppy via un prestataire de paiement sécurisé — la SAS A2MG CrossFit n'a pas accès à vos données bancaires)</li>
                    </ul>

                    <h3 className="text-cream/90 font-heading uppercase tracking-wider text-sm mb-3">C. En salle</h3>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-1 pl-6 list-disc">
                        <li>Informations relatives à votre état de santé si communiquées volontairement</li>
                        <li>Photographies prises lors des séances (avec consentement pour publication)</li>
                    </ul>
                </section>

                {/* 3. Finalités */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">3. Finalités du traitement</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">Vos données personnelles sont collectées pour les finalités suivantes :</p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li><strong className="text-cream/90">Gestion des inscriptions et des réservations</strong> — traitement de votre inscription, réservation de séances et gestion de votre abonnement ;</li>
                        <li><strong className="text-cream/90">Communication</strong> — envoi d'informations relatives à votre abonnement, aux horaires et aux événements de la salle ;</li>
                        <li><strong className="text-cream/90">Facturation</strong> — établissement et suivi des factures et paiements ;</li>
                        <li><strong className="text-cream/90">Amélioration de nos services</strong> — analyse statistique anonymisée de la fréquentation du site ;</li>
                        <li><strong className="text-cream/90">Obligations légales</strong> — conservation des données requises par la législation fiscale et commerciale.</li>
                    </ul>
                </section>

                {/* 4. Base juridique */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">4. Base juridique des traitements</h2>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li><strong className="text-cream/90">Exécution du contrat</strong> (article 6.1.b du RGPD) — pour la gestion de votre abonnement et la fourniture des services ;</li>
                        <li><strong className="text-cream/90">Intérêt légitime</strong> (article 6.1.f du RGPD) — pour le fonctionnement technique du site (chargement des polices Google Fonts, hébergement) ;</li>
                        <li><strong className="text-cream/90">Obligation légale</strong> (article 6.1.c du RGPD) — pour la conservation des factures et documents comptables ;</li>
                        <li><strong className="text-cream/90">Consentement</strong> (article 6.1.a du RGPD) — pour la publication de photographies à des fins de communication.</li>
                    </ul>
                </section>

                {/* 5. Durée de conservation */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">5. Durée de conservation</h2>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li><strong className="text-cream/90">Données d'inscription :</strong> pendant toute la durée de l'abonnement, puis 3 ans après la fin de la relation commerciale ;</li>
                        <li><strong className="text-cream/90">Données de facturation :</strong> 10 ans conformément aux obligations comptables ;</li>
                        <li><strong className="text-cream/90">Données de navigation :</strong> 13 mois maximum ;</li>
                        <li><strong className="text-cream/90">Photographies :</strong> jusqu'au retrait du consentement.</li>
                    </ul>
                </section>

                {/* 6. Destinataires */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">6. Destinataires des données</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">Vos données personnelles sont accessibles uniquement aux personnes et entités suivantes :</p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li>Le personnel habilité de la SAS A2MG CrossFit (coachs et direction) ;</li>
                        <li><strong className="text-cream/90">Peppy</strong> (app.peppy.cool) — plateforme de réservation et de paiement en ligne, en qualité de sous-traitant ;</li>
                        <li><strong className="text-cream/90">Netlify, Inc.</strong> — hébergeur du site web (données techniques de connexion) ;</li>
                        <li><strong className="text-cream/90">Google LLC</strong> — via le service Google Fonts utilisé pour l'affichage des polices sur le site (adresse IP transmise lors du chargement des polices).</li>
                    </ul>
                    <p className="text-cream/70 font-body leading-relaxed mt-3">
                        Vos données ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales.
                    </p>
                </section>

                {/* 7. Transferts hors UE */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">7. Transferts hors de l'Union Européenne</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Certaines données peuvent être transférées vers les États-Unis via nos sous-traitants (Netlify et Google). Ces transferts sont encadrés par le <strong className="text-cream/90">Data Privacy Framework UE-États-Unis</strong> (décision d'adéquation de la Commission européenne du 10 juillet 2023) ou par des <strong className="text-cream/90">clauses contractuelles types</strong> approuvées par la Commission européenne.
                    </p>
                </section>

                {/* 8. Cookies */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">8. Cookies et technologies de suivi</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Le site CrossFit Genki <strong className="text-cream/90">n'utilise pas de cookies publicitaires ni de traceurs marketing</strong>. Aucun outil d'analyse de trafic (Google Analytics, Meta Pixel, etc.) n'est installé sur le Site.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Des <strong className="text-cream/90">cookies strictement nécessaires</strong> peuvent être déposés par l'hébergeur (Netlify) pour le bon fonctionnement technique du site. Ces cookies ne nécessitent pas votre consentement conformément à l'article 82 de la Loi Informatique et Libertés.
                    </p>
                    <p className="text-cream/70 font-body leading-relaxed">
                        Le chargement des polices Google Fonts entraîne la transmission de votre adresse IP à Google LLC. Ce traitement est fondé sur l'intérêt légitime (bon affichage du site). Vous pouvez bloquer le chargement de ces polices via les paramètres de votre navigateur.
                    </p>
                </section>

                {/* 9. Droits */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">9. Vos droits</h2>
                    <p className="text-cream/70 font-body leading-relaxed mb-3">
                        Conformément au RGPD et à la Loi Informatique et Libertés, vous disposez des droits suivants :
                    </p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-2 pl-6 list-disc">
                        <li><strong className="text-cream/90">Droit d'accès</strong> — obtenir une copie de vos données personnelles ;</li>
                        <li><strong className="text-cream/90">Droit de rectification</strong> — corriger des données inexactes ou incomplètes ;</li>
                        <li><strong className="text-cream/90">Droit à l'effacement</strong> — demander la suppression de vos données ;</li>
                        <li><strong className="text-cream/90">Droit à la limitation</strong> — restreindre le traitement de vos données ;</li>
                        <li><strong className="text-cream/90">Droit à la portabilité</strong> — recevoir vos données dans un format structuré ;</li>
                        <li><strong className="text-cream/90">Droit d'opposition</strong> — vous opposer au traitement de vos données ;</li>
                        <li><strong className="text-cream/90">Droit de retirer votre consentement</strong> à tout moment lorsque le traitement est fondé sur le consentement.</li>
                    </ul>
                    <p className="text-cream/70 font-body leading-relaxed mt-4">
                        Pour exercer vos droits, contactez-nous :
                    </p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-1 pl-0 list-none mt-2">
                        <li>📧 <strong className="text-cream/90">contact.crossfitgenki@gmail.com</strong></li>
                        <li>📍 SAS A2MG CrossFit — Pôle d'activité de Talange Nord, 57525 Talange</li>
                    </ul>
                    <p className="text-cream/70 font-body leading-relaxed mt-4">
                        Nous nous engageons à répondre dans un délai d'un mois maximum. En cas de non-satisfaction, vous pouvez introduire une réclamation auprès de la <strong className="text-cream/90">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :
                    </p>
                    <ul className="text-cream/70 font-body leading-relaxed space-y-1 pl-0 list-none mt-2">
                        <li>🌐 <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-wine hover:text-white transition-colors underline underline-offset-4">www.cnil.fr</a></li>
                        <li>📍 3 Place de Fontenoy — TSA 80715 — 75334 Paris Cedex 07</li>
                    </ul>
                </section>

                {/* 10. Sécurité */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">10. Sécurité des données</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        La SAS A2MG CrossFit met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. Le site est servi en HTTPS (connexion chiffrée SSL/TLS). Les données de paiement sont traitées par des prestataires certifiés PCI-DSS et ne transitent jamais par nos serveurs.
                    </p>
                </section>

                {/* 11. Modifications */}
                <section className="mb-10">
                    <h2 className="text-lg md:text-xl font-heading text-wine uppercase tracking-wider mb-4">11. Modifications de la politique</h2>
                    <p className="text-cream/70 font-body leading-relaxed">
                        La présente Politique de Confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous invitons à la consulter régulièrement.
                    </p>
                </section>

                {/* Footer navigation */}
                <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-heading uppercase tracking-widest">
                    <Link to="/mentions-legales" className="text-cream/50 hover:text-wine transition-colors">Mentions légales</Link>
                    <Link to="/cgv" className="text-cream/50 hover:text-wine transition-colors">CGV</Link>
                    <Link to="/" className="text-cream/50 hover:text-wine transition-colors">Accueil</Link>
                </div>
            </div>
        </div>
    );
}
