"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";
import fallbackImage from "@/public/fallback.png";

export function ImageWithFallback({
  src,
  alt,
  onError,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={(e) => {
        if (imgSrc !== fallbackImage) {
          setImgSrc(fallbackImage);
        }
        onError?.(e);
      }}
    />
  );
}

export default ImageWithFallback;
