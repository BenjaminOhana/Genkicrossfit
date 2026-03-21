import { motion } from 'framer-motion';

export function BoxGallery() {
    const images = [
        {
            url: "/assets/bienvenue/IMG_6085.jpeg",
            alt: "Athlètes en plein effort",
            className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
            position: "object-center"
        },
        {
            url: "/assets/bienvenue/IMG_5926.jpeg", // Swapped dumbbells for the big branding logo to add diversity
            alt: "Mur du logo CrossFit Genki",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
            position: "object-[center_30%]" // The logo is higher up
        },
        {
            url: "/assets/bienvenue/IMG_5817.jpeg",
            alt: "Espace HYROX",
            className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
            position: "object-center"
        },
        {
            url: "/assets/bienvenue/IMG_5802.jpeg", // Wide horizontal shot
            alt: "Vue globale de la box CrossFit Genki",
            className: "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
            position: "object-[center_20%]" // The rigs and athletes are towards the middle-top
        }
    ];

    return (
        <section id="box" className="py-24 md:py-32 bg-black text-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <span className="text-wine font-heading tracking-widest uppercase text-sm mb-4 block">Notre Espace</span>
                        <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-white">Bienvenue chez toi.</h2>
                        <p className="text-cream/70 font-body text-lg leading-relaxed">
                            400 m² pensés pour toi. Un espace principal de 280 m² pour les cours, et un espace Open & Chill de 120 m² pour t'entraîner librement ou simplement décompresser. Box à taille humaine, matériel neuf, ambiance unique.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-12 text-cream/70 font-body"
                    >
                        <div>
                            <span className="block text-3xl font-heading text-white mb-1">280m²</span>
                            <span className="text-sm uppercase tracking-wider">Zone WOD</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-heading text-white mb-1">120m²</span>
                            <span className="text-sm uppercase tracking-wider">Open & Chill</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-4 h-[700px] md:h-[600px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative rounded-2xl overflow-hidden group ${img.className}`}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${img.position}`}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
