import { useState } from "react";
import styles from "./Gallery.module.css";
import { FaPlus, FaTimes, FaExpandAlt } from "react-icons/fa";

const images = [
  { id: 1, src: "/gallery1.jpg", title: "Vista Externa" },
  { id: 2, src: "/gallery2.jpg", title: "Deck Principal" },
  { id: 3, src: "/gallery3.jpg", title: "Suíte Deluxe" },
  { id: 4, src: "/gallery4.jpg", title: "Interior Vila" },
  { id: 5, src: "/gallery5.jpg", title: "Piscina Natural" },
  { id: 6, src: "/gallery6.jpg", title: "Ação Kitesurf" },
  { id: 7, src: "/gallery7.jpg", title: "Pôr do Sol Yara" },
  { id: 8, src: "/gallery8.jpg", title: "Detalhe Interior" },
  { id: 9, src: "/hero_bg.jpg", title: "Vista Aérea" }
];

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = showAll ? images : images.slice(0, 6);

  const openLightbox = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className={styles.section} id="gallery">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Galeria de Momentos</h2>
          <p className={styles.subtitle}>Explore cada detalhe do seu refúgio flutuante em Guriú</p>
        </div>
        
        <div className={styles.grid}>
          {visibleImages.map((img, index) => (
            <div key={index} className={styles.item} onClick={() => openLightbox(img)}>
              <div className={styles.imageWrapper}>
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className={styles.image} 
                  loading="lazy" 
                />
                <div className={styles.overlay}>
                  <FaExpandAlt className={styles.expandIcon} />
                  <span className={styles.imgTitle}>{img.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className={styles.buttonWrapper}>
            <button className={styles.seeMoreBtn} onClick={() => setShowAll(true)}>
              <FaPlus /> Ver Mais Fotos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className={styles.fullImage} 
            />
            <div className={styles.caption}>{selectedImage.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
