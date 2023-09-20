import React from "react";
import Image from "next/image";

interface ImageComponentProps {
  src: string;
  alt: string;
  width: string | number;
  height: number;
  objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
      className={className}
    />
  );
};

export default ImageComponent;
