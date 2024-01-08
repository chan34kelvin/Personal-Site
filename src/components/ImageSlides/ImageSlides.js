//css
import "./ImageSlides.css";

export default function ImageSlides({ id, images }) {
    //modal+carousel
    return (
        <div id={id} tabIndex="-1" className="modal fade">
            <div className="modal-dialog modal-dialog-centered" style={{ minWidth: "75vw" }}>
                <div className="modal-content position-relative">
                    <button
                        type="button"
                        className="close-modal-button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body p-0">
                        <div id={"carousel-" + id} className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active" key={images[0]}>
                                    <img
                                        src={images[0]}
                                        className="carousel-image"
                                        alt={images[0]}
                                    />
                                </div>
                                {images
                                    .filter((img) => img !== images[0])
                                    .map((image) => (
                                        <div className="carousel-item" key={image}>
                                            <img src={image} className="carousel-image" alt={image} />
                                        </div>
                                    ))}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target={"#carousel-" + id}
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target={"#carousel-" + id}
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
