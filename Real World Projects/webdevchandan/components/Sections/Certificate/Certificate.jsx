import { Card } from '@components';
import '@styles/card.scss';
import SectionTitle from '../SectionTitle';


const Certificate = () => {
  const description = "It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among other";

  return (
    <section className="card-section section">
      <div className="container">

        <SectionTitle subTitle="Certificate" title="Achievements" />

        <div className="row">

          <Card
            dataCatg="HackerRank"
            cardName="Certificate"
            cardTitle="CSS"
            cfAuthority="HackerRank"
            desc={description}
            issDate="08 Nov, 2021"
            expDate="No Expiry"
            skills="CSS"
            cfLink="https://www.hackerrank.com/certificates/4114d28f2d49"
            largeImg="/img/certificate/large/HackerRank-Verfied-CSS-Certificate.png"
            thumbImg="/img/certificate/thumb/HackerRank-Verfied-CSS-Certificate.png"
            altTxt="HackerRank Verfied CSS Certificate"
          />

        </div>
      </div>
    </section>
  )
}

export default Certificate