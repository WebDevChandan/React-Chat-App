import { MyImage } from "../components";
import { AboutMe, AboutTabs, Education, Experience, Skill, SocialLinks, Title } from "./components";
import './styles/about.scss';

export default function About() {
    const tabsComponent = [
        {
            label: "skills",
            component: <Skill />,
            active: true,
        },
        {
            label: "experience",
            component: <Experience />,
            active: false,
        },
        {
            label: "education",
            component: <Education />,
            active: false,
        },

    ]
    
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <Title title="About Me" subTitle="Main Info" />

                <div className="row">
                    <div className="about-img">
                        <MyImage src="/img/Chandan_Kumar.webp" />
                        <SocialLinks />
                    </div>
                    <AboutMe />
                </div>

                <AboutTabs />

                {tabsComponent.map(({ label, component, active }, index) => (
                    <div className="row" key={index}>
                        <div className={`${active ? "active" : ""} ${label} tab-content`}>
                            <div className="row">
                                {component}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
