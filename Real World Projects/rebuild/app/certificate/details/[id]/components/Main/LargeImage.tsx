import Image from "next/image";

export default function LargeImage(
    { width, height, largeImage, altText }:
    { width: number, height: number, largeImage: string, altText: string, title?: string }) {
    return (
        <Image
            className="cp-img outer-shadow"
            width={width}
            height={height}
            src={largeImage}
            alt={altText}
            layout="responsive"
            quality={80}
            priority={false}
        />
    )
}
