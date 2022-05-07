import "./modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-card">{children}</div>
      <button onClick={handleClose}>close</button>
    </div>
  );
}
