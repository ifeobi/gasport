import "./Home.css";
import menu from "../../images/menu.svg";
import close from "../../images/close.svg";
import delivery from "../../images/delivery.png";
import star from "../../images/star-icon.svg";
import uzo from "../../images/uzos.jpg";
import pic from "../../images/pic-ed.jpg";
import appstore from "../../images/appstore.png";
import playstore from "../../images/play.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


function Home() {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const mobileNav = document.querySelector("nav.mobile-nav");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(
      ".mobile-menu-container .close-icon"
    );
    const mobileMenuContainer = document.querySelector(
      ".mobile-menu-container"
    );

    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 60;
      nav.classList.toggle("scrolled", isScrolled);
      mobileNav.classList.toggle("scrolled", isScrolled);
    };

    const handleMenuClick = () => {
      mobileMenuContainer.classList.add("active");
    };

    const handleCloseClick = () => {
      mobileMenuContainer.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);
    menuIcon.addEventListener("click", handleMenuClick);
    closeIcon.addEventListener("click", handleCloseClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuIcon.removeEventListener("click", handleMenuClick);
      closeIcon.removeEventListener("click", handleCloseClick);
    };
  }, []);

  return (
    <>
      <header>
        <div class="wrapper">
          <nav>
            <div class="logo" style={{ cursor: "pointer" }}>
              Gasport
            </div>
            <ul>
              {/* <!-- <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li> --> */}
              <li>
                <Link to="/newsfeed">Newsfeed</Link>
              </li>
              <li>
                <a href="tel:+2348085235006" class="btn dark">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- End of desktop navigation menu --> */}

          <nav class="mobile-nav scrolled">
            <div class="logo" style={{ cursor: "pointer" }}>
              Gasport
            </div>
            <div class="menu-icon">
              <img src={menu} alt="" />
            </div>
          </nav>

          <div class="mobile-menu-container">
            <div class="close-icon">
              <img src={close} alt="" />
            </div>
            <ul>
              {/* <!-- <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li> --> */}
              <li>
                <Link to="/newsfeed">Newsfeed</Link>
              </li>
              <li>
                <a href="tel:+2348085235006" class="btn dark">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- End of mobile nav --> */}

          <div class="hero-section">
            <div class="left">
              <h1>
                Just stay at home <br />
                While we deliver
              </h1>
              <p>
                With our reliable service, you can now easily order and receive
                your cooking gas without leaving your house. Enjoy the
                convenience of cooking delicious meals for your family while
                staying safe indoors.
              </p>
              <a href="tel:+2348085235006" class="btn dark">
                Contact us
              </a>
            </div>

            <div class="right">
              <img src={delivery} alt="" />
            </div>

            <div class="achievement-cards">
              <div class="achievement-card students-enrolled">
                <div class="content">
                  <div>
                    <h3>6k+</h3>
                  </div>
                  <p>customer base</p>
                </div>
                <div class="bg"></div>
              </div>

              <div class="achievement-card overall-rating">
                <div class="content">
                  <div>
                    <h3>4.7</h3>
                    <img src={star} alt="" />
                  </div>
                  <p>Overall Rating</p>
                </div>
                <div class="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- End of the header section --> */}

      <div class="wrapper">
        <section class="testimonials-section">
          <div class="left">
            <div class="testimonial-card">
              <div class="content">
                Great service. Any time I need them I just call. Thank you :)
              </div>

              <div class="info">
                <h4>Uzo Obijiofor</h4>
                <p class="company">Architect, Rockscape Design</p>
              </div>

              <img src={uzo} alt="" />
            </div>

            <div class="testimonial-card">
              <div class="content">
                I just place a call and they deliver. No Stress!
              </div>

              <div class="info">
                <h4>Funmi Agbo</h4>
                <p class="company">Auditor</p>
              </div>

              <img src={pic} alt="" />
            </div>
          </div>

          <div class="right">
            <h2>What our customers say</h2>

            <div class="features">
              <p>
                We take pride in providing a top-notch service that meets our
                customers' needs and expectations.
              </p>
              <p>
                But don't just take our word for it – here's what some of our
                satisfied customers had to say about their experience with us:
              </p>
            </div>

            <a href="tel:+2348085235006" class="btn light desktop-btn">
              Contact us
            </a>
          </div>
          <a href="tel:+2348085235006" class="btn light mobile-btn">
            Contact us
          </a>
        </section>
      </div>

      {/* <!-- End of testimonials section --> */}

      <section class="courses-section"></section>

      <div class="wrapper">
        <section class="app-section">
          <h2>Get Our App</h2>
          <p>You can use our App for better experience on smartphones</p>

          <div class="app-buttons">
            <div
              class="app-btn"
              title="not yet available"
              style={{ cursor: "default" }}
            >
              <img
                src={appstore}
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <span>App Store</span>
            </div>

            <a href="https://play.google.com/store/apps/details?id=com.elofusim.gasport">
              <div class="app-btn">
                <img
                  src={playstore}
                  style={{ height: "50px", width: "50px" }}
                  alt=""
                />
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* <!-- End of the app section --> */}

      <Footer />
    </>
  );
}

export default Home;
