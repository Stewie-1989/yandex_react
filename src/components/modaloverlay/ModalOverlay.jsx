import "./modules.css";
import PropTypes from "prop-types";

const ModalOverlay = ({ onClick }) => {
  return <section className="modaloverlay" onClick={onClick}></section>;
};

export default ModalOverlay;

ModalOverlay.propType = {
  onClick: PropTypes.func.isRequired
}