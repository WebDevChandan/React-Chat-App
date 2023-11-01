import Image from "next/image";

export default function MyImage({src}: {src: string}) {
    return (
        <div className="img-box inner-shadow">
            <Image
                src={src}
                className="outer-shadow"
                alt="Chandan Kumar"
                width={420}
                height={420}
                layout="responsive"
                priority={true}
            />
        </div>
    )
}
