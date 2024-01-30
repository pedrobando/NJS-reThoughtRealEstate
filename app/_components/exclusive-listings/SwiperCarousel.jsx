"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// import styles
import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const SwiperCarousel = ({images}) => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  return (
    <div className="container w-11/12 mx-auto mt-[-80px] overflow-hidden rounded-lg md:max-h-[700px]  md:-rotate-none">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        className="overflow-hidden"
      >
       
        <LightGallery plugins={[lgZoom]} mode="lg-fade"  onInit={onInit} speed={500}>
          {images.map((image, index) => (
            <SwiperSlide
              tag="a"
              href={image}
              data-lg-size="1600-1144"
              data-src={image}
              key={index}
              className="overflow-hidden rounded-lg gallery-item"
            >
              <img
                className="object-cover"
                src={image}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </LightGallery>
       
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
