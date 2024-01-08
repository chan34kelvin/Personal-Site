//components
import { ImageModal } from "../ImageModal";
import { ImageSlides } from "../ImageSlides";

//css
import "./HexagonImage.css";

export default function HexagonImage({ id, images }) {
  return (
    <>
      <div className="hexagon-display">
        <div className="hexagon-axis" />
        <div className="hexagon-container">
          <div className="hexagon">
            <div className="hexagon-img-border">
              <img
                className="hexagon-img-shape hexagon-img"
                data-bs-toggle="modal"
                data-bs-target={"#" + id}
                src={images[0]}
                alt={images[0]}
              />
            </div>
          </div>
        </div>
        {images.length > 1 ? (
          <>
            <div
              className="sliders"
              data-bs-toggle="modal"
              data-bs-target={"#" + id}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </div>
            <ImageSlides id={id} images={images} />
          </>
        ) : (
          <ImageModal id={id} src={images[0]} />
        )}
      </div>
    </>
  );
}
