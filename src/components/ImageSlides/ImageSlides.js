

export default function ImageSlides({ id, images }) {

    //modal+carousel
    return (
        <div className="modal fade" id={"modal-"+id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">

                        <div id={"carousel-" + id} className="carousel slide">
                            <div className="carousel-inner">
                                {images.map((imageObj) => {
                                    return (
                                        <div className="carousel-item">
                                            <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>{imageObj.label}</h5>
                                                <p>{imageObj.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={"#carousel-" + id} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={"#carousel-" + id} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}