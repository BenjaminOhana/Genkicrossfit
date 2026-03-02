export function Hyrox() {
    return (
        <div className="w-full">
            <section id="hyrox-hero" className="min-h-[80vh] pt-24 pb-12 flex items-center justify-center bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-block px-4 py-1 mb-6 border border-wine/50 rounded-full text-wine font-heading tracking-widest text-sm uppercase bg-black/50 backdrop-blur-sm">
                        Nouveau Programme
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                        HYROX <span className="text-wine">METZ</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto font-light">
                        La compétition fitness pour tous. Prépare-toi avec l'expertise CrossFit Genki à Talange.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://app.peppy.cool" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                            S'entraîner avec nous
                        </a>
                        <a href="#what-is-hyrox" className="btn-secondary w-full sm:w-auto border-cream/20 text-cream hover:border-cream hover:bg-cream hover:text-black">
                            C'est quoi HYROX ?
                        </a>
                    </div>
                </div>
            </section>

            <section id="what-is-hyrox" className="py-24 bg-gray text-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-wine">Le Concept</h2>
                    <div className="max-w-3xl mx-auto text-lg space-y-6">
                        <p>
                            HYROX est la première compétition de fitness en salle ouverte à tous. Peu importe ton niveau sportif, HYROX est fait pour toi.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
