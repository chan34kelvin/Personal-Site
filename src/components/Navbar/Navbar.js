import { Link } from "react-router-dom";

//components
import { NightButton } from "./NightButton";

//css
import "./Navbar.css";

export default function Navbar() {
  const iconSize = "";

  return (
    <nav className="navbar pt-4 px-xl-3 pe-xl-4">
      {/* d-flex flex-row gap-3 w-100 */}
      <div className="navbar-buttons">
        <Link
          to="/"
          className="icon"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Home"
        >
          <span
            className={`${iconSize} icon-size material-icons-outlined icon-interior`}
            style={{ backgroundColor: "#da2c43" }}
          >
            home
          </span>
        </Link>
        <Link
          to="/my-projects"
          className="icon"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Projects"
        >
          <span
            className={`material-icons-outlined icon-interior ${iconSize}`}
            style={{ backgroundColor: "#eed202" }}
          >
            article
          </span>
        </Link>
        <Link
          to="/about"
          className="icon"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="About me"
        >
          <span
            className={`material-icons-outlined icon-interior ${iconSize}`}
            style={{ backgroundColor: "#3cd070" }}
          >
            face_6
          </span>
        </Link>
        <div className="ms-xl-auto">
          <NightButton />
        </div>
      </div>
    </nav>
  );
}
