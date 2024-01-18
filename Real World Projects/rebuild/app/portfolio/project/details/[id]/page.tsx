import { PrismaClient } from "@prisma/client";
import "../../../styles/portfolio.scss";
import { HeaderDetails, MainDetails } from './components';
import './styles/projectDetails.scss';
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const prisma = new PrismaClient();

const fetchPortfolioDetails = async (slug: string) => {
    const portfolioDetails = await prisma.portfolioDetail.findUnique({
        where: {
            slug,
        }, select: {
            portfolioHeaderDetail: true,
            portfolioMainDetail: true,
            slug: true,
        }
    })

    return portfolioDetails;
}

export default async function ProjectDetails({ params }: Params) {

    const uuid: string = params.id;
    const portfolioDetailsData = await fetchPortfolioDetails(uuid);


    return (
        <>
            <div className="pp portfolio-popup">

                <div className="pp-details">
                    <HeaderDetails
                        headerDetails={portfolioDetailsData?.portfolioHeaderDetail}
                        slug={portfolioDetailsData?.slug}
                    />
                </div>

                <div className="separator"></div>

                <MainDetails
                    src={portfolioDetailsData!.portfolioMainDetail.imgSrc}
                    altText={portfolioDetailsData!.portfolioMainDetail.altText}
                    titleText={portfolioDetailsData?.portfolioMainDetail.titleText}
                    webFrameLink={portfolioDetailsData?.portfolioMainDetail.webFrameLink}
                />
            </div >
        </>
    )
}
