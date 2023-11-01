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
        label: "Web Application",
        active: false,
    }, {
        label: "E-Commerce",
        active: false,
    }, {
        label: "Web Design & Development",
        active: false,
    }];

    return (
        <div className="row">
            <div className="portfolio-filter">
                {portfolioFilters.map(({ label, active }, index) => (
                    <span className={`${active ? "active outer-shadow " : ""}filter-item`} data-target={label.toLowerCase().replace(/[" "]/g, "-")} key={index}>{label}</span>
                ))}
            </div>
        </div>
    )
}
