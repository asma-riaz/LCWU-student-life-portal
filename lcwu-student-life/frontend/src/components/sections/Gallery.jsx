import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cx } from "../../lib/cx";
import { SectionHead } from "../ui/SectionHead";
import { GALLERY_FILTERS, GALLERY_IMAGES } from "../../data/galleryImages";
import { useApiData } from "../../lib/api";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

export function Gallery() {
  const { data: images } = useApiData("/gallery.php", GALLERY_IMAGES);
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = useMemo(
    () => (filter === "all" ? images : images.filter((image) => image.cat === filter)),
    [images, filter]
  );

  useLockBodyScroll(lightboxIndex !== null);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % filteredImages.length);
      if (event.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  const activeImage = lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionHead
          eyebrow="Student Gallery"
          title="Moments from around campus"
          description="Graduations, matches, festivals, and the everyday. Select a photo for a closer look."
        />

        <div className="gallery-filters">
          {GALLERY_FILTERS.map((item) => (
            <button
              key={item.value}
              type="button"
              className={cx("gallery-filter", filter === item.value && "gallery-filter-active")}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="masonry">
          {filteredImages.map((image, index) => (
            <motion.div
              className="masonry-item"
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.04 }}
            >
              <img src={image.src} alt={image.caption} loading="lazy" />
              <div className="masonry-caption">{image.caption}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              className="lightbox-nav lightbox-nav-prev"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((i) => (i - 1 + filteredImages.length) % filteredImages.length);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <div onClick={(event) => event.stopPropagation()}>
              <img src={activeImage.src} alt={activeImage.caption} />
              <p className="lightbox-caption">{activeImage.caption}</p>
            </div>
            <button
              type="button"
              className="lightbox-nav lightbox-nav-next"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((i) => (i + 1) % filteredImages.length);
              }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
