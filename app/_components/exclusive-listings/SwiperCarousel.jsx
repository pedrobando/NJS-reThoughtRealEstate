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

const SwiperCarousel = (images) => {
  return (
    <div className="container md:mx-auto mt-[-40px] overflow-hidden rounded-lg max-h-[700px] aspect-auto border-none origin-bottom -rotate-1 md:-rotate-0">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="overflow-hidden"
      >
        {" "}
        <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
          {images.images.map((image, index) => (
            <SwiperSlide
              tag="a"
              href={image}
              data-lg-size="1600-1144"
              data-src={image}
              key={index}
              className="overflow-hidden rounded-lg"
            >
              <img
                className="img-responsive"
                src={image}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </LightGallery>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
