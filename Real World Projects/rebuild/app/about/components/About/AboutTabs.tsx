"use client";
export default function AboutTabs() {
    const aboutTabs = [
        {
            label: "skills",
            active: true,
        }, {
            label: "experience",
            active: false,
        }, {
            label: "education",
            active: false,
        }
    ];

    const switchTab = (tab: HTMLElement, tabList: any, idx: number) => {
        if (tab.classList.contains("active")) return;

        const tabContentList = document.querySelectorAll('.tab-content');

        tabList.forEach((tab: HTMLElement, index: number) => {
            if (index === idx) {
                tab.classList.add("active", "outer-shadow");
                tabContentList[index].classList.add("active");
            }
            else {
                tab.classList.remove("active", "outer-shadow");
                tabContentList[index].classList.remove("active");
            }
        })
    }

    return (
        <div className="row">
            <div className="about-tabs">
                {aboutTabs.map(({ label, active }, index) => (
                    <span key={index} className={`${active ? "active outer-shadow " : ""}tab-item`} data-target={`.${label}`} onClick={(e) => switchTab(e.currentTarget, e.currentTarget.parentElement?.childNodes, index)}>{label}</span>
                ))}
            </div>
        </div>
    )
}
