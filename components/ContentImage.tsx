import Image from "next/image";

export type ContentImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function ContentImage({
  image,
  className = "",
  sizes = "100vw",
}: {
  image: ContentImageData;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      className={`content-image ${className}`.trim()}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
    />
  );
}
