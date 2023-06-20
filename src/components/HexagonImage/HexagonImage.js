
//css
import "./HexagonImage.css"

export default function HexagonImage({ imgSrc }) {

    return (
        <div className="hexagon-display">
            <div className="hexagon-axis" />
            <div className="hexagon-container">
                <div className="hexagon">
                    <div className="hexagon-img-border">
                        <img
                            className="hexagon-img-shape hexagon-img"
                            src={imgSrc}
                            alt="kelvin-pic"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}