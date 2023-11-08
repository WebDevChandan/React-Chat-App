import { HeaderDescription, HeaderInfo, HeaderTitle } from "..";

type ProjectInfoType = {
    from: string;
    to: string;
    client: string;
    link: string;
    tools: string[];
    demo: string;
}

export default function HeaderDetail({ projectHeader, description, projectInfo }: { projectHeader: { title: string; category: string; }, description: string, projectInfo: ProjectInfoType }) {
    return (
        <div className="pp-details-inner">
            <HeaderTitle title={projectHeader.title} category={projectHeader.category} />

            <div className="pp-project-details">
                <div className="row">
                    <HeaderDescription description={description} />
                    <HeaderInfo
                        from={projectInfo.from}
                        to={projectInfo.to}
                        client={projectInfo.client}
                        link={projectInfo.link}
                        tools={projectInfo.tools}
                        demo={projectInfo.demo}
                    />
                </div>
            </div>
        </div>
    )
}
