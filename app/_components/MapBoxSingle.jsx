"use client";
import { Suspense, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import WaveDividerBottom from "./WaveDividerBottom";
import getCenter from "geolib/es/getCenter";
import Loading from '../loading';


export default function MapBoxSingle({ listingCoordinates }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const coordinates = {
    longitude: listingCoordinates.longitude,
    latitude: listingCoordinates.latitude,
  };

  const [viewport, setViewport] = useState({
    zoom: 16,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
  });
  return (
   
    <div className="h-[600px] max-h-[600px] w-[600px] max-w-[600px] skew-y-3 rounded-lg overflow-hidden border-2 border-reGreen shadow-lg shadow-reGreen">
    
      <ReactMapGL
        mapStyle="mapbox://styles/pedrobandorivera/clrl6vf5m003201qsb5235rfx"
        mapboxAccessToken={process.env.mapbox_token}
        initialViewState={{ ...viewport }}
        width="600px"
        height="600px"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
      
          <div key={coordinates.longitude}>
            <Marker
              latitude={coordinates.latitude}
              longitude={coordinates.longitude}
              anchor="bottom"
              aria-label="Map Marker"
            >
            <img src="http://staging6.rethought-realestate.com/wp-content/uploads/2020/05/icon.jpg" className="max-w-[30px]"/>
            </Marker>
          </div>
     
      </ReactMapGL>
    </div> 
  );
}
