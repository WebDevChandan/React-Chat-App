"use client";
import { useRouter } from "next/navigation";
import { PortfolioThumbImage } from ".";
import { portfolioCardData } from "../page";

export default function PortfolioCard() {
    const router = useRouter();

    return (
        <div className="row portfolio-items">
            {
                portfolioCardData.map(({ id, title, src, altText, category }, index) => (
                    <div className="portfolio-item" data-category={category.toLowerCase().replace(/[" "]/g, "-")} key={index}
                        onClick={() => router.push(`${location.pathname}/project/details/${id}`)}
                    >
                        <div className="portfolio-item-inner outer-shadow">
                            <PortfolioThumbImage title={title} src={src} altText={altText} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
