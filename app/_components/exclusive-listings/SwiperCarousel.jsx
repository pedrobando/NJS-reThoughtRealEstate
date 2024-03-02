"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module
import "swiper/css/scrollbar"; // Scrollbar module
import "swiper/css/free-mode"; // FreeMode module
import SwiperCore, { Navigation, Scrollbar, FreeMode } from "swiper/modules";
import Image from "next/image";

const SwiperCarousel = ({ listing }) => {
  const images = listing.images
 
  return (
    <div className="container mx-auto  rounded-lg px-3 block max-h-[320px] overflow-hidden">
      <Swiper
        slidesPerView={4}
        className="w-full h-full max-h-[320px] rounded-lg overflow-hidden "
        navigation={true}
        scrollbar={true}
        freeMode={true}
        modules={[Navigation, Scrollbar, FreeMode]} // Explicitly pass modules
        style={{
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-color": "#fff",
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="overflow-hidden aspect-video">
            <Image
              src={image}
              alt={`${listing.address.deliveryLine} Photo`}
              fill={true}
              style={{ objectPosition: "center", objectFit:"cover" , height:"100%", width:"100%"}}
              sizes="(max-width: 2000px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
