"use client";
import { useState } from "react";
import ReactMapGL, {Marker, FullscreenControl} from 'react-map-gl'
import WaveDividerBottom from "./WaveDividerBottom";

export default function MapBoxF() {
  const [viewport, setViewport] = useState({
    zoom: 11,
    latitude: 37.7577,
    longitude: -122.4376,
    height:'100%',
  });
  return (
    <section className="relative flex hidden md:inline-flex md:w-screen h-[400px]">
      <ReactMapGL
        mapStyle="mapbox://styles/pedrobandorivera/clrl6vf5m003201qsb5235rfx"
        mapboxAccessToken={process.env.mapbox_token}
        initialViewState={{...viewport}}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      />
     
      <WaveDividerBottom fill="waveDivider-white"/>
 
    </section>
  );
}
