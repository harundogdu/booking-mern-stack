import { useEffect, useState } from "react";
import { imgArray } from "utils/helper";
import "./DetailsGallery.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DetailsGallery() {
  const [currentImg, setCurrentImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (index) => {
    setIsOpen(true);
    imgArray.find((item) => (item.id === index ? setCurrentImg(item) : null));
  };

  const handleSlide = (direction) => {
    let temp = currentImg.id;
    direction === "left" ? temp-- : temp++;

    if (temp < 1) {
      temp = imgArray.length;
    } else if (temp > imgArray.length) {
      temp = 1;
    }

    imgArray.find((item) => (item.id === temp ? setCurrentImg(item) : null));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    window.scrollTo(0, 0);
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="detailsGallery">
      {imgArray.map((item) => (
        <div
          className="detailsGalleryItem"
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          <img src={item.img} alt={item.title} />
        </div>
      ))}
      {isOpen && (
        <div className="parent">
          <div className="detailsGalleryModal">
            <img src={currentImg.img} alt="Modal" />
            <button className="btnLeft">
              <BsArrowLeftCircleFill onClick={() => handleSlide("left")} />
            </button>
            <button className="btnClose" onClick={() => setIsOpen(false)}>
              <AiFillCloseCircle />
            </button>
            <button className="btnNext">
              <BsArrowRightCircleFill onClick={() => handleSlide("right")} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
