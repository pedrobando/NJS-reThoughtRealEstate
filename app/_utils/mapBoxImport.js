"use client"
import React from "react";
import { usePathname } from "next/navigation";

function MapBoxImport() {
  const path = usePathname();
  if (path == "/exclusive-listings") {
    return <><link
    href="https://api.tiles.mapbox.com/mapbox-gl-js/v3.1.0/mapbox-gl.css"
    rel="stylesheet"
    precedence="default"
  /></>;
  }
}

export default MapBoxImport;
