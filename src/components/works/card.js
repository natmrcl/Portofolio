import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Card = ({
  title,
  description,
  tools,
  projectLink,
  liveSiteLink,
  image,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const Modal = () => (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Swiper
          modules={[Navigation, Pagination]} // ⬅️ Tambahkan modulnya di sini
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {image.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`${title} - Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="modal-close" onClick={toggleModal}>
          X
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>

          <div className="card-tools">
            <span>Tools:</span>{" "}
            {tools.map((tool, index) => (
              <span key={index} className="tool">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="card-image" onClick={toggleModal}>
          <img src={image[0]} alt={title} />
        </div>
      </div>

      {showModal && ReactDOM.createPortal(<Modal />, document.body)}
    </>
  );
};

export default Card;
