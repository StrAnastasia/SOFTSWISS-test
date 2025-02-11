import { ArticleTiles, Button } from "../../shared/components";
import "./Home.scss";
import planetImg from "../../shared/images/EARTH.png";

const OFFERS = [
  {
    title: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
  },
  {
    title: "Space is not just stars and planets",
    description: "Go on a space adventure",
  },
  {
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
  },
  {
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
  },
];

const Home = () => (
  <div className="homePage">
    <div className="firstScreen">
      <div className="textAndImage">
        <div className="content">
          <h1>
            Discover the vast expanses of <p className="pinkText">space</p>
          </h1>
          <h2>
            Where the possibilities are{" "}
            <span className="yellowText">endless!</span>
          </h2>
          <Button>Learn more</Button>
        </div>
        <div className="image">
          <img alt="Earth img" src={planetImg} width="360px" height="403px" />
        </div>
      </div>
    </div>
    <div className="offersBlock">
      <div className="content">
        <h2>Offers</h2>
        <div className="articles">
          <ArticleTiles articles={OFFERS} />
        </div>
        <h2>Embark on a space journey</h2>
        <p>
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <p className="yellowText">Read more</p>
      </div>
    </div>
  </div>
);

export default Home;
