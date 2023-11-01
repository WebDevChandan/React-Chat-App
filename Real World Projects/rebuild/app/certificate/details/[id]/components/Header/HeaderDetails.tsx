import { CertificateDescription, CertificateInfo, CertificateTitle } from "..";

type HeaderDetailsType = {
    title: {
        name: string;
        authority: string;
    };
    info: {
        issueDate: string;
        expiryDate: string;
        skill: string;
        link: string;
    };
    description: string;
}

export default function HeaderDetails({headerDetails}: {headerDetails: HeaderDetailsType}) {
    return (
        <>
            <CertificateTitle name={headerDetails.title.name} authority={headerDetails.title.authority} />

            <div className="cp-project-details">
                <div className="row">
                    <CertificateDescription description={headerDetails.description} />
                    <CertificateInfo
                        issueDate={headerDetails.info.issueDate}
                        expiryDate={headerDetails.info.expiryDate}
                        skill={headerDetails.info.skill}
                        link={headerDetails.info.link}
                    />
                </div>
            </div>
        </>
    )
}
