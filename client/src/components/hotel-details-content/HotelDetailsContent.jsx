import "./HotelDetails.css";
import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

export default function HotelDetailsContent({ hotel }) {
  const [currentImg, setCurrentImg] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (index) => {
    setIsOpen(true);
    hotel.photos.find((item) =>
      item.id === index ? setCurrentImg(item) : null
    );
  };

  const handleSlide = (direction) => {
    let temp = currentImg.id;
    direction === "left" ? temp-- : temp++;

    if (temp < 1) {
      temp = hotel.photos.length;
    } else if (temp > hotel.photos.length) {
      temp = 1;
    }

    hotel.photos.find((item) =>
      item.id === temp ? setCurrentImg(item) : null
    );
  };

  useEffect(() => {
    const body = document.querySelector("body");
    window.scrollTo(0, 0);
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <section>
      <main className={"hotelDetailsArea"}>
        <div className="detailsArea">
          <div className="inner">
            <div className="detailHeader">
              <h1 className="detailsTitle">{hotel.name}</h1>
              <p className="detailsSubtitle">
                <HiLocationMarker />
                <span>{hotel.address}</span>
              </p>
            </div>
            <div className="buttonContainer">
              <button className="btnReserve">Reserve or Book Now!</button>
            </div>
          </div>
          <div className="property">
            Excellent location - {hotel.distance}m from center
          </div>
          <div className="taxiArea">
            Book a stay over ${hotel.cheapestPrice} at this property and get a
            free airport taxis
          </div>
        </div>

        <div className="detailsGallery">
          {hotel.photos.map((item) => (
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
                  <BsArrowRightCircleFill
                    onClick={() => handleSlide("right")}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="detailsFooter">
          <div className="footerDetail">
            <h1>{hotel.title}</h1>
            <p>{hotel.description}</p>
          </div>
          <div className="footerButtons">
            <h1>Perfect for a 9-night stay!</h1>
            <p className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequatur vero eum hic repellat aspernatur.
            </p>
            <p className="price">
              <strong>$945</strong>
              <span>(9 nights)</span>
            </p>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </main>
    </section>
  );
}
