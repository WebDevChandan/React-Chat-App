import { Effects, HomeText, MyImage } from './components';
import './styles/home.scss';

export default function Home() {
  return (
    <section className="home-section section" id="home">
      <Effects />

      <div className="container">
        <div className="row full-screen align-items-center">

          <HomeText />

          <div className="home-img">
            <MyImage src="Chandan_Kumar.webp" />
          </div>

        </div>
      </div>

    </section>
  )
}
