import ModalOverlay from "../modaloverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import "./modal.css";
import React from "react";
import PropTypes from "prop-types";

export default function Modal({ children, closeModal, title }) {
  React.useEffect(() => {
    const keydownEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", keydownEsc);
    return () => {
      document.removeEventListener("keydown", keydownEsc);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <section className="modal">
        <section className="ml-10 mt-10 mr-10 constructor-element__row content">
          <p className="text text_type_main-medium">{title}</p>
          <section onClick={closeModal}>
            <CloseIcon type="primary" />
          </section>
        </section>
        {children}
      </section>
      <ModalOverlay onClick={closeModal} />
    </>,

    document.getElementById("react-modals")
  );
}

Modal.propType = {
  title: PropTypes.string
}
