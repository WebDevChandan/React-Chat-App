import Button from '@components/Button';
import '@styles/home.scss';
import Image from 'next/image';

const Home = () => {
  return (
    <section className="home-section section active" id="home">
      {/* <!-- effect wrap start --> */}
      <div className="effect-wrap">
        <div className="effect effect-1">
        </div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3">
        </div>
        <div className="effect effect-4">
        </div>
        <div className="effect effect-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* <!-- effect wrap end --> */}
      <div className="container">
        <div className="row full-screen align-items-center">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm <label id="myName" data-text="Chandan">Chandan</label>
            </h2>
            <h1>WordPress & Front End Web Developer</h1>
            <Button btnText="Portfolio" hrefText="portfolio" btnType="link-item btn-1" />
            <Button btnText="Resume" target="_blank" hrefText="resume" btnType="link-item btn-1" />
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <Image
                src="/img/Chandan_Kumar.webp"
                className="outer-shadow"
                alt="Chandan Kumar"
                width={420}
                height={420}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home