
//css
import "./ImageModal.css"

export default function ImageModal({ src, id }) {

    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
        >
            <div class="modal-dialog modal-dialog-centered" data-dismiss="modal">
                <div className="modal-content">
                    <div className="modal-body">
                        {/* eslint-disable-next-line */}
                        <img src={src} className="img-fluid image-magnified" alt={"Magnified " + id} />
                    </div>
                </div>
            </div>
        </div>
    )
}