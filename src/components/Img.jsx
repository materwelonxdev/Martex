import { useState } from "react";

// image with a gray fallback while the real file is missing
export default function Img({ src, alt = "", ratio = "4/3", className = "" }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return <div className={`bg-[#e9e8f2] ${className}`} style={{ aspectRatio: ratio }} />;
  }
  return <img src={src} alt={alt} onError={() => setBad(true)} className={className} />;
}