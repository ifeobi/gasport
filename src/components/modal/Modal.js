import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

export default function Modal({ about, setAbout }) {
  const closeModal = () => {
    setAbout(false);
    document.body.style.overflowY = "auto";
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal">
        <div onClick={closeModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Hello Friends!</h2>
          <p>
            We are Nigeria's leading provider of cooking gas delivery services,
            deliverying cooking gas quickly and reliably to homes and
            businesses. With a wide network of distribution centers and a team
            of experienced professionals, we ensure that our customers always
            have access to clean and affordable cooking gas. We pride ourselves
            on our commitment to safety and customer satisfaction, and strive to
            make cooking with gas a convenient and hassle-free experience for
            all our customers.
          </p>
          <div className="contact-details">
            <a href="tel:+2348085235006">
              <div className="btn dark">08085235006 </div>
            </a>
            <a href="tel:+2348085235006">
              <div className="btn dark">support@gasportlite.com</div>{" "}
            </a>
          </div>
          <button className="close-modal" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </>,
    document.getElementById("about_modal")
  );
}
