import { HeaderDescription, HeaderInfo, HeaderTitle } from "..";

export default function HeaderDetail() {
    return (
        <div className="pp-details-inner">
            <HeaderTitle />

            <div className="pp-project-details">
                <div className="row">
                    <HeaderDescription />
                    <HeaderInfo />
                </div>
            </div>
        </div>
    )
}
