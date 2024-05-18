import "./DeleteButton.css";

const DeleteButton = ({ onDelete }) => <div onClick={onDelete} className="delete-button">X</div>;
export default DeleteButton;
