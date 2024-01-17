//components
import { HexagonImage } from "../../components/HexagonImage";

//css
import "./About.css";

export default function About() {
  const image = "./images/about/pic-of-kelvin-4.png";

  return (
    <>
      <HexagonImage images={[image]} id={"about-image"} />
      <div className="about-content">
        <div className="d-flex flex-column gap-3 gap-xl-4">
          {/* display-3 only for mobile versions */}
          <div className="text-title about-title-adjustment">About Me</div>
          <hr className="line-block" />
        </div>
        <div className="about-description">
          I'm Kelvin Chan, an experienced developer skilled in JS, Python, and
          Java. Specializing in web development, I create relevant applications
          using React, Bootstrap CSS, and Figma. I help clients showcase their
          values by creating their professional websites. Outside of work, I
          enjoy outdoor activities like basketball, soccer, and gaming with
          friends on Valorant and League of Legends.
        </div>
        {/* github, linkedin icons on bootstrap icons */}
        <div className="about-content-contacts">
          {/* target="_blank" rel="noopener noreferrer" */}
          <a href="https://github.com/chan34kelvin" className="contact-icon">
            <i className="bi bi-github contact-icon-interior"></i>
          </a>
          <a href="https://www.instagram.com/cuponoodle_/" className="contact-icon">
            <i className="bi bi-instagram contact-icon-interior"></i>
          </a>
        </div>
        <a
          className="primary button"
          href={
            process.env.PUBLIC_URL + "/db/Kelvin Ching Kiu Chan_Resume.docx.pdf"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </>
  );
}
