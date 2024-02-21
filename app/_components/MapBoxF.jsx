"use client";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import WaveDividerBottom from "./WaveDividerBottom";
import getCenter from "geolib/es/getCenter";
import Image from "next/image";
import Link from "next/link";

export default async function MapBoxF({ listingsResults }) {
  
  const [selectedLocation, setSelectedLocation] = useState({});
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const coordinates = listingsResults.map((result) => ({
    longitude: result.coordinates.longitude,
    latitude: result.coordinates.latitude,
  }));
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    zoom: 9,
    latitude: center.latitude,
    longitude: center.longitude,
  });

  
  return (
    <section className="hidden relative flex md:inline-flex md:w-screen h-[400px] max-h-[400px] overflow-hidden bg-gray-800 z-[1000]">
      <ReactMapGL
        mapStyle="mapbox://styles/pedrobandorivera/clrl6vf5m003201qsb5235rfx"
        mapboxAccessToken={process.env.NEXT_PUBLIC_mapbox_token}
        initialViewState={{ ...viewport }}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {listingsResults.map((result) => (
          <div key={result.coordinates.longitude} >
            <Marker
              latitude={result.coordinates.latitude}
              longitude={result.coordinates.longitude}
              anchor="bottom"
              aria-label="Map Marker"
            >
              <p
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedLocation(result);
                }}
                className="cursor-pointer px-3 py-2 bg-gray-200 rounded-lg text-md font-heading font-semibold text-reBlue hover:scale-110 transition-transform"
              >
                {USDollar.format(result.listPrice)}
              </p>
            </Marker>
            {selectedLocation.systemId === result.systemId ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.coordinates.latitude}
                longitude={result.coordinates.longitude}
                className="m-0 p-0 z-[100]"
              >
               
                <div className="w-full rounded-t-lg overflow-hidden z-[100]">
                  <Image
                    src={result.images[0]}
                    alt={result.address.deliveryLine}
                    width={250}
                    height={350}
                    style={{ objectPosition: "center", objectFit: "cover" }}
                  />
                </div>

                <p className="text-reDark font-heading font-semibold text-[14px] pt-2 pl-2 z-[100]">
                  {result.address.deliveryLine}
                </p>
                <p className="text-reDark font-heading text-[12px] pl-2 pb-1 pt-0 z-[100]">
                  {result.address.city}, {result.address.state}{" "}
                  {result.address.zip}
                </p>
                <p className="text-reDark font-heading text-[12px] pl-2 pb-2 pt-0 float-left z-[100]">
                  {result.status}
                </p>
                <p className="text-reDark font-heading text-[12px] px-3 pb-3 pt-0 float-left font-semibold z-[100]">
                  {result.propertyType}
                </p>
                <p className="text-reDark font-heading text-[12px] px-3 pb-3 pt-0 float-left font-semibold z-[100]">
                {USDollar.format(result.listPrice)}
                </p>

                <Link href={`/exclusive-listings/${result.id}`} ><p className="text-reDark font-heading text-[12px] px-3 pb-3 pt-0 float-left font-semibold z-[100]">See details</p></Link>
               
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>

      <WaveDividerBottom fill="waveDivider-white" />
    </section>
  );
}
