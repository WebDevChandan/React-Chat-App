import Title from '../components/Title';
import { CertificateCard } from './components/index';
import './styles/certificate.scss';


export default function Certificate() {
    const certificateCardInfo = [
        {
            id: 1,
            label: "CSS",
            src: "/img/certificate/thumb/HackerRank-Verfied-CSS-Certificate.png",
            info: "HackerRank Verfied CSS Certificate",
        }
    ]

    return (
        <section className="certificate-section section" id="certificate">
            <div className="container">
                <Title title='Certificate' subTitle='Achievements' />

                <div className="row">
                    {certificateCardInfo.map(({ id, label, src, info }, index) => (
                        <CertificateCard id={id} label={label} src={src} info={info} key={index} />
                    ))}

                </div>
            </div>
        </section>

    )
}
