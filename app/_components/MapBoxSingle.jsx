"use client";
import { Suspense, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

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
    zoom: 12,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });
  return (
    <div className="w-screen px-5 lg:px-0 h-[500px] md:h-[600px] overflow-hidden rounded-lg">
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/standard"
        mapboxAccessToken={process.env.mapbox_token}
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
            <img
              src="http://staging6.rethought-realestate.com/wp-content/uploads/2020/05/icon.jpg"
              className="max-w-[30px]"
            />
          </Marker>
        </div>
      </ReactMapGL>
    </div>
  );
}
