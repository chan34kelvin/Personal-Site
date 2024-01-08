//css
import "./ImageModal.css";

export default function ImageModal({ id, src }) {
  return (
    <div id={id} tabIndex="-1" className="modal fade">
      <div
        className="modal-dialog modal-dialog-centered"
        data-bs-dismiss="modal"
      >
        <div className="modal-content">
          <div className="modal-body d-flex flex-column justify-content-center p-0">
            {/* eslint-disable-next-line */}
            <img src={src} className="image-magnified" alt={src} />
          </div>
        </div>
      </div>
    </div>
  );
}
