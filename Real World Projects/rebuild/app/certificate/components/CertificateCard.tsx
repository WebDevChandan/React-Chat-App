"use client";
import { useRouter } from "next/navigation";
import ThumbImage from "./ThumbImage";

export default function CertificateCard({ id, label, src, info }: { id: number, label: string, src: string, info: string }) {
    const router = useRouter();

    const openCertificateDetails = (id: number) => {
        router.push(`certificate/details/${id}`);
    }

    return (
        <div className="certificate-item" data-category="HackerRank" onClick={() => openCertificateDetails(id)}>
            <div className="certificate-item-inner outer-shadow">
                <div className="certificate-item-img">
                    <ThumbImage
                        width={319.95}
                        height={219.95}
                        src={`/img/certificate/thumb/${src}`}
                        altText={info}
                    />
                    <span className="view-certificate">view certificate</span>
                </div>
                <p className="certificate-item-title">{label}</p>
            </div>
        </div>
    )
}