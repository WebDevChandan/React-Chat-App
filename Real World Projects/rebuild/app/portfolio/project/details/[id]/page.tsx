import "../../../styles/portfolio.scss";
import { HeaderDetails, MainDetails } from './components';

export default function ProjectDetails() {
    return (
        <div className="pp portfolio-popup">
            <div className="pp-details">
                <HeaderDetails />
            </div>

            <div className="separator"></div>

            <MainDetails />
        </div >
    )
}
