"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ScriptLoader({ src, id, strategy = "afterInteractive", onLoad }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <Script
      id={id}
      src={src}
      strategy={strategy}
      onLoad={handleLoad}
    />
  );
}