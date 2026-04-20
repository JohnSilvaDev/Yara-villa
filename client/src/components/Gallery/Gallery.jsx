import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Gallery.module.css";
import { FaPlus, FaTimes, FaExpandAlt } from "react-icons/fa";

function Gallery() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 10, src: "/demo-video.mp4", type: "video", titleKey: "Drone" },
    { id: 1, src: "/vistaexterna.jpeg", titleKey: "gallery_img1" },
    { id: 2, src: "/gallery2.JPG", titleKey: "gallery_img2" },
    { id: 3, src: "/gallery3.JPG", titleKey: "gallery_img3" },
    { id: 4, src: "/gallery4.JPG", titleKey: "gallery_img4" },
    { id: 5, src: "/gallery12.JPG", titleKey: "gallery_img5" },
    { id: 6, src: "/gallery6.JPG", titleKey: "gallery_img6" },
    { id: 7, src: "/gallery7.jpeg", titleKey: "gallery_img7" },
    { id: 8, src: "/gallery11.JPG", titleKey: "gallery_img8" },
    { id: 9, src: "/gallery102.JPG", titleKey: "gallery_img9" }
  ];

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
          <h2 className={styles.title}>{t("gallery_title")}</h2>
          <p className={styles.subtitle}>{t("gallery_subtitle")}</p>
        </div>

        <div className={styles.grid}>
          {visibleImages.map((img, index) => (
            <div key={index} className={styles.item} onClick={() => openLightbox(img)}>
              <div className={styles.imageWrapper}>
                {img.type === "video" ? (
                  <video
                    src={img.src}
                    className={styles.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={img.src}
                    alt={t(img.titleKey)}
                    className={styles.image}
                    loading="lazy"
                  />
                )}
                <div className={styles.overlay}>
                  <FaExpandAlt className={styles.expandIcon} />
                  {img.type !== "video" && <span className={styles.imgTitle}>{t(img.titleKey)}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className={styles.buttonWrapper}>
            <button className={styles.seeMoreBtn} onClick={() => setShowAll(true)}>
              <FaPlus /> {t("gallery_see_more")}
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
            {selectedImage.type === "video" ? (
              <video
                src={selectedImage.src}
                className={styles.fullImage}
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedImage.src}
                alt={t(selectedImage.titleKey)}
                className={styles.fullImage}
              />
            )}
            {selectedImage.type !== "video" && <div className={styles.caption}>{t(selectedImage.titleKey)}</div>}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
