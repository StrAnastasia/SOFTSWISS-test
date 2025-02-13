import { ArticleTiles, Button } from "../../shared/components";
import "./Home.scss";
import planetImg from "../../shared/images/EARTH.png";

const OFFERS = [
  {
    title: "Move&nbsp;the borders of&nbsp;reality!",
    description: "Go on a space adventure - it's&nbsp;possible with&nbsp;us!",
  },
  {
    title: "Space is not just&nbsp;stars and&nbsp;planets",
    description: "Go on a space adventure",
  },
  {
    title: "For those who&nbsp;dream of&nbsp;stars",
    description: "Our offer: make your dream come true",
  },
  {
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
  },
];

const Home = () => (
  <div className="home-page">
    <div className="home-page__first-screen_wrapper">
      <div className="page__content_margined-section home-page__first-screen_text-and-image">
        <div className="home-page__first-screen_text">
          <h1>
            Discover the vast expanses of <p className="home-page__first-screen_text_pink">space</p>
          </h1>
          <h2>
            Where the possibilities are{" "}
            <span className="home-page__first-screen_text_yellow">endless!</span>
          </h2>
          <Button>Learn more</Button>
        </div>
        <div className="home-page__first-screen_image">
          <img alt="Earth img" src={planetImg} width="330px" height="367px" loading="lazy" />
        </div>
      </div>
    </div>
    <div className="home-page__offers-block_wrapper">
      <div className="page__content_margined-section home-page__offers-block_content">
        <h3>Offers</h3>
        <div className="home-page__offers-block_content_articles-block">
          <ArticleTiles articles={OFFERS} />
        </div>
        <h3>Embark on a space journey</h3>
        <input type="checkbox" className="home-page__offers-block_content_read-more_state" id="changeVisibleText" />
        <div className="home-page__offers-block_content_read-more_wrapper">
          <p className="home-page__offers-block_content_read-more_base-text">
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.&nbsp;
          </p>
          <p className="home-page__offers-block_content_read-more_extra-text">
            Some more additional text, lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
        </div>
        <label htmlFor="changeVisibleText" className="home-page__offers-block_content_read-more_button"></label>
      </div>
    </div>
  </div>
);

export default Home;
