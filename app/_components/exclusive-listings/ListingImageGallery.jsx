"use client"
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// import styles
import "lightgallery/css/lightgallery-bundle.min.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";


const ListingImageGallery = (images) => {
  return (
<LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade" elementClassNames="grid grid-cols-6 ">
  {images.images.map((image, index) => (
    <img
      className="h-full w-full object-cover"
      src={image}
      alt={`Slide ${index}`}
      key={index}
    />
  ))}
</LightGallery>

  )
}

export default ListingImageGallery