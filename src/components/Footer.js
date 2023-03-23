import React, { useState } from "react";
import { Link } from "react-router-dom";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import Form from "./Form";
import Modal from "./modal/Modal";

const Footer = () => {
  const [about, setAbout] = useState(false);

  const aboutModal = () => {
    setAbout(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {about && <Modal about={about} setAbout={setAbout} />}
      <footer>
        <div className="wrapper">
          <div className="links-container">
            <div className="links">
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#" onClick={aboutModal}>
                    About Us
                  </a>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                {/* <li>
                  <a href="#">Terms & Conditions</a>
                </li> */}
              </ul>
            </div>

            <div className="links">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="mailto: support@gasportlite.com">
                    support@gasportlite.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2348085235006">08085235006</a>
                </li>
              </ul>

              <div className="social">
                <a href="#">
                  <img
                    src={fb}
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </a>

                <a href="#">
                  <img
                    src={ig}
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </a>
              </div>

              <Form />              
            </div>
          </div>

          <p class="copyright">
            This website was developed by{" "}
            <a href="https://stripe-tec.com" style={{ color: "blue" }}>
              Stripe-tec
            </a>{" "}
            © {new Date().getFullYear()}
          </p>
        </div>
        <a
          href="https://wa.me/+2348085235006?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services."
          className="float"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>
      </footer>
    </>
  );
};

export default Footer;
