import "../../../styles/portfolio.scss";
import { HeaderDetails, MainDetails } from './components';
import './styles/projectDetails.scss';

export default function ProjectDetails() {
    const projectDetailsData = [
        {
            headerDetails: {
                projectHeader: {
                    title: "GoChat",
                    category: "Web Application",
                },
                projectInfo: {
                    from: "Apr, 2021",
                    to: "Jul , 2021",
                    client: "Chandan Kumar",
                    link: "https://www.google.com",
                    tools: ["HTML", "CSS", "JavaScript"],
                    demo: "Email: Demo@demo.com / Pass: demo"
                },
                description: "Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident, vitae iure tempora voluptatum quasi sequi atque. Iusto doloremque, vero!",
            },
            mainDetails: {
                imgSrc: ["/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp"],
                altText: "GoChat Admin Panel",
                titleText: "Admin Panel",
                webFrameLink: "https://webdevchandan.github.io/text-speech-converter/"
            }

        }
    ]

    return (
        <>
            {
                projectDetailsData.map(({ headerDetails, mainDetails }, index) => (
                    <div className="pp portfolio-popup" key={index}>

                        <div className="pp-details">
                            <HeaderDetails
                                description={headerDetails.description}
                                projectHeader={headerDetails.projectHeader}
                                projectInfo={headerDetails.projectInfo}
                            />
                        </div>

                        <div className="separator"></div>

                        <MainDetails
                            src={mainDetails.imgSrc}
                            altText={mainDetails.altText}
                            titleText={mainDetails.titleText}
                            webFrameLink={mainDetails.webFrameLink}
                        />
                    </div >
                ))
            }
        </>
    )
}
