import Image from "next/image";

export default function ThumbImage({ width, height, src, altText, title }: { width: number, height: number, src: string, altText: string, title?: string }) {
    return (
        <Image
            className="animate"
            src={src}
            alt={altText}
            title={title ? title : altText}
            width={width}
            height={height}
            layout="responsive"
            loading="lazy"
            quality={50}
            priority={false}
        />
    )
}
