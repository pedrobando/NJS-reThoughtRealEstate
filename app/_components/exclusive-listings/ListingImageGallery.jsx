"use client"
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import Image from "next/image";

// import styles
import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";


const ListingImageGallery = (images) => {
  return (
<LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade" elementClassNames="grid grid-cols-6 ">
  {images.images.map((image, index) => (
    <Image
      src={image}
      alt={`Slide ${index}`}
      key={index}
      style={{ objectPosition: "center", objectFit:"cover", height:"100%", width:"100%", cursor: "pointer"  }}
      width={600}
      height={600}
    />
  ))}
</LightGallery>

  )
}

export default ListingImageGallery