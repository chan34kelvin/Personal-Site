import { Link } from "react-router-dom";

//components
import { HexagonImage } from "../../components/HexagonImage";

//css
import "./Home.css";

export default function Home() {
  const image = `${process.env.PUBLIC_URL}/images/home/pic-of-kelvin-1.jpg`;

  return (
    <>
      {/* have to take from personal-site because the url rn is base/Personal-site which the pathing doesnt start with /Personal-Site/ so have to add that in. Only for this page. */}
      <HexagonImage images={[image]} id={"home-image"} />
      <div className="home-content">
        <div className="d-flex flex-column gap-3 gap-xl-4">
          <div className="text-title">Kelvin Chan</div>
          <hr className="line-block" />
        </div>
        <div className="d-flex flex-column gap-3 gap-xl-4">
          <div className="text-subtitle">Web Developer</div>
          <div className="text-subtitle">Hong Kong SAR</div>
        </div>
        <div className="d-flex flex-column gap-3 gap-xl-4 home-content-buttons">
          <Link className="primary button" to="/about">
            About me
          </Link>
          <Link className="secondary button" to="/my-projects">
            My Projects
          </Link>
        </div>
      </div>
    </>
  );
}
