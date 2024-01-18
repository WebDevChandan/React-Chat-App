import { PrismaClient } from "@prisma/client";
import { CertificateDescription, CertificateInfo, CertificateTitle } from "..";

type HeaderDetailsType = {
    authority: string;
    issueDate: string;
    expiryDate: string;
    skill: string;
    link: string;
    description: string;
} | undefined

const prisma = new PrismaClient();

const fetchCertificateTitle = async (details_id?: string) => {
    const certificateTitle = await prisma.certificate.findUnique({
        where: { details_id },
        select: {
            label: true,
        }
    });
    return certificateTitle;
}
export default async function HeaderDetails({ headerDetails, slug }: { headerDetails: HeaderDetailsType, slug: string | undefined }) {
    const certificateTitle = await fetchCertificateTitle(slug);
    return (
        <>
            <CertificateTitle name={certificateTitle!.label} authority={headerDetails?.authority} />

            <div className="cp-project-details">
                <div className="row">
                    <CertificateDescription description={headerDetails!.description} />
                    <CertificateInfo
                        issueDate={headerDetails?.issueDate}
                        expiryDate={headerDetails?.expiryDate}
                        skill={headerDetails?.skill}
                        link={headerDetails!.link}
                    />
                </div>
            </div>
        </>
    )
}
