import "./modal.css";
import reactDOM from "react-dom";

//Moving the modal template to another portal
export default function Modal({ children, handleClose, isSalesModal }) {
  return reactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal-card"
        style={{
          border: "4px, solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center"
        }}
      >
        {children}
        <button
          onClick={handleClose}
          className={isSalesModal ? "sales-btn" : "show"}
        >
          close
        </button>
      </div>
    </div>,
    document.body
  );
}
