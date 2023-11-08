import { Title } from '../components';
import { PortfolioCard, PortfolioFilter } from './components';
import './styles/portfolio.scss';

export const portfolioCardData = [
    {
        id: 1,
        title: "GoChat",
        src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
        altText: "GoChat by MoviesRocker.co",
        category: "Web Application"
    },
    {
        id: 2,
        title: "GoChat (WordPress)",
        src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
        altText: "GoChat by MoviesRocker.co",
        category: "WordPress"
    }]

export default function Portfolio() {
    return (
        <section className="portfolio-section section" id="portfolio">
            <div className="container">

                <Title title="Portfolio" subTitle="Latest Projects" />

                <PortfolioFilter />

                <PortfolioCard />
            </div>
        </section>
    )
}
