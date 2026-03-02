import { motion } from 'framer-motion';

export function BoxGallery() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
            alt: "Vue globale de la box CrossFit Genki",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
            alt: "Espace Open & Chill",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
            alt: "Zone haltérophilie",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80",
            alt: "Matériel CrossFit",
            className: "md:col-span-2 md:row-span-1"
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

                <div className="flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative rounded-2xl overflow-hidden group ${img.className} h-[200px] md:h-auto`}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
