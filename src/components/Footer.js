import React from "react";
import fb from "../images/fb.png";
import ig from "../images/ig.png";

const Footer = () => {
  return (
    <footer>
      <div class="wrapper">
        <div class="links-container">
          <div class="links">
            <h3>Quick links</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div class="links">
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

            <div class="social">
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

            <form action="#">
              <input type="text" placeholder="Email Address" />
              <button class="submit-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <p class="copyright">This website was developed by <a href="https://stripe-tec.com" style={{color: "blue"}}>Stripe-tec</a> © 2023</p>
      </div>
      <a
        href="https://wa.me/+2348085235006?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services."
        className="float"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </footer>
  );
};

export default Footer;
