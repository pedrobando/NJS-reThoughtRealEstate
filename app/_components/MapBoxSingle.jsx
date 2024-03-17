"use client";
import { Suspense, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Image from "next/image";
import mapIcon from "@/public/img/rethought-for-sale.png"

export default function MapBoxSingle({ listingCoordinates }) {

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const coordinates = {
    longitude: listingCoordinates.longitude,
    latitude: listingCoordinates.latitude,
  };

  const [viewport, setViewport] = useState({
    zoom: 14,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    scrollZoom:false,
    pitch:true,
    touchPitch:true,
    boxZoom:true
  });
  return (
    <div className="w-screen px-5 lg:px-0 h-[500px] md:h-[600px] overflow-hidden rounded-lg">
     
      <ReactMapGL
        mapStyle="mapbox://styles/pedrobandorivera/clrl6vf5m003201qsb5235rfx"
        mapboxAccessToken={process.env.NEXT_PUBLIC_mapbox_token}
        initialViewState={{ ...viewport }}
        width="100%"
        height="100%"
        
       
      >
        <div key={coordinates.longitude}>
          <Marker
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            anchor="bottom"
            aria-label="Map Marker"
          >
            <Image
              src={mapIcon}
              alt="Marker"
              style={ {maxWidth: "190px"} }
            />
          

          </Marker>
        </div>
      </ReactMapGL>
    </div>
  );
}
