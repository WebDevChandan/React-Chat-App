"use client";

export default function PortfolioFilter() {
    const portfolioFilters = [{
        label: "All",
        active: true,
    }, {
        label: "Web application",
        active: false,
    }, {
        label: "WordPress",
        active: false,
    }, {
        label: "E-Commerce",
        active: false,
    }, {
        label: "Web Design & Development",
        active: false,
    }];

    const switchFilter = (currentFilterTab: HTMLElement, filterTabList: any, _idx: number) => {
        if (currentFilterTab.classList.contains("active")) return;

        filterTabList.forEach((tab: HTMLElement, _index: number) => {
            if (currentFilterTab === tab)
                currentFilterTab.classList.add("active", "outer-shadow");
            else
                tab.classList.remove("active", "outer-shadow");
        })

        const portfolioItemList = document.querySelectorAll('.portfolio-item');

        portfolioItemList.forEach((item: Element) => {
            const portfolioItem = item as HTMLElement;

            if (portfolioItem.dataset.category === currentFilterTab.dataset.target || currentFilterTab.dataset.target === "all") {
                portfolioItem.classList.add("show");
                portfolioItem.classList.remove("hide");
            }
            else {
                portfolioItem.classList.remove("show");
                portfolioItem.classList.add("hide");
            }
        })
    }

    return (
        <div className="row">
            <div className="portfolio-filter">
                {portfolioFilters.map(({ label, active }, index) => (
                    <span className={`${active ? "active outer-shadow " : ""}filter-item`} data-target={label.toLowerCase().replace(/[" "]/g, "-")} key={index} onClick={(e) => switchFilter(e.currentTarget, e.currentTarget.parentElement?.childNodes, index)}>{label}</span>
                ))}
            </div>
        </div>
    )
}
