import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Gallery/ImageGallery.module.css";
import Carousel from "./Carousel";

const imageData = [
  "/image/webImages/display.webp",
  "/image/webImages/About1img.webp",
  "/image/webImages/About2img_.webp",
  "/image/webImages/about2img.webp",
  "/image/webImages/about3img.webp",
  "/image/webImages/gallery1.webp",
  "/image/webImages/gallery2.webp",
  "/image/webImages/gallery3.webp",
  "/image/webImages/gallery4.webp",
  "/image/webImages/gallery5.webp",
  "/image/webImages/gallery6.webp",
  "/image/webImages/gallery7.webp",
  "/image/webImages/gallery8.webp",
  "/image/webImages/gallery9.webp",
  "/image/webImages/gallery10.webp",
  "/image/webImages/gallery11.webp",
  "/image/webImages/gallery12.webp",
  "/image/webImages/gallery13.webp",
  "/image/webImages/gallery14.webp",
  "/image/webImages/gallery15.webp",
  "/image/webImages/gallery16.webp",
  "/image/webImages/gallery17.jpg",
  "/image/webImages/gallery18.jpg",
  "/image/webImages/OurStory.webp",
  "/image/webImages/welDenFac.webp",
];

const MasonryGallery = () => {
  const [focusImage, setFocusImage] = useState("");
  const [isModalActive, setModalActive] = useState(false);

  const handleClick = (src) => {
    setFocusImage(src);
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
    setTimeout(() => setFocusImage(""), 300);
  };

  return (
    <div className="bg-[#2d2d2d] pb-5 mb-5">
      <h3 className={styles.head}>Image Gallery</h3>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div>
          <Carousel />
        </div>
        <div className={styles.masonryContainer}>
          <div className={styles.masonry}>
            {imageData.map((src, index) => (
              <div
                key={index}
                className={styles.masonryItem}
                onClick={() => handleClick(src)}
              >
                <Image
                  src={src}
                  alt="image"
                  style={{ objectFit: "cover" }}
                  width={300}
                  height={400}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {focusImage && (
        <div
          className={`${styles.modal} ${
            isModalActive ? styles.modalActive : ""
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`${styles.modalContent} ${
              isModalActive ? styles.imageActive : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={focusImage}
              alt="Focused Image"
              width={350}
              height={610}
              sizes="300px"
              style={{ objectFit: "contain" }}
              className={`${styles.focusImage} ${
                isModalActive ? styles.imageActive : ""
              }`}
            />
          </div>
        </div>
      )}
      <p className="text-center text-white m-12 mt-2 p-5 tracking-wider text-sm md:text-base border-t-2 border-b-2 border-amber-300">
        Welcome to the Dental Facets gallery! Here, you can take a visual tour
        of our modern facilities, meet our friendly team, and see the advanced
        technology we use. Each image reflects our commitment to quality care
        and a comfortable experience. Enjoy exploring!
      </p>
    </div>
  );
};

export default MasonryGallery;
