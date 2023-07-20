
//components
import { ImageModal } from "./components"

//css
import "./HexagonImage.css"

export default function HexagonImage({ imgSrc, modalId }) {

    return (
        <>
            <div className="hexagon-display" data-toggle="modal" data-target={"#"+modalId}>
                <div className="hexagon-axis" />
                <div className="hexagon-container">
                    <div className="hexagon">
                        <div className="hexagon-img-border">
                            <img
                                className="hexagon-img-shape hexagon-img"
                                src={imgSrc}
                                alt={modalId}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ImageModal src={imgSrc} id={modalId} />
        </>
    )
}