import React from "react";
import Image, { ImageProps } from "next/image";

export default function CommonImage(props: ImageProps) {
  const { fill, width, height, ...rest } = props;

  return (
    <Image
      quality={75}
      width={fill ? undefined : width ?? 1200}
      height={fill ? undefined : height ?? 800}
      sizes="(max-width: 768px) 100vw, 1200px"
      {...rest}
    />
  );
}
