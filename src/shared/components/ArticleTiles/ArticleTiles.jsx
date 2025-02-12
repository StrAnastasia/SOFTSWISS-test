import Button from "../Button";
import "./ArticleTiles.scss";
import backgroun1 from "../../images/backgrounds/space_2.png";
import backgroun2 from "../../images/backgrounds/space_3.png";
import backgroun3 from "../../images/backgrounds/space_4.png";
import backgroun4 from "../../images/backgrounds/space_5.png";

const BACKGROUNDS = [backgroun1, backgroun2, backgroun3, backgroun4];

const ArticleTiles = ({ articles }) => (
  <div className="articles__wrapper">
    {articles.map(({ title, description }, ind) => (
      <div
        key={title}
        className="articles__element"
        style={{
          backgroundImage: `linear-gradient(-90deg,rgba(0, 0, 0, 0) 0%,rgba(15, 20, 32, 0.79) 100%), url(${BACKGROUNDS[ind]})`,
        }}
      >
        <div>
          <h4 dangerouslySetInnerHTML={{ __html: title }} />
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <Button variant="outlined">Learn more</Button>
        </div>
      </div>
    ))}
  </div>
);

export default ArticleTiles;
