import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function App() {




  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <section className="Section-1-MainPage">
          <nav className="navbar">
            <div className="lakbay-logo-container">
              <div className="lakbay-logo-img-container">
                <img src="" alt="" />
              </div>
              <h1 className="Lakbay-text"> LAKBAY</h1>
            </div>
            <ul className="nav-lists hidden "
            >
              <li>Home</li>
              <li>Destination</li>
              <li>Offers</li>
              <li>About Us</li>
            </ul>

            <div className="BookNow-container hidden">
              <button className="BookNow">Book Now</button>
            </div>
          </nav>

          <div className="main-page-container">
            <video autoPlay loop muted>
              <source
                src="/src/assets/background.mp4"
                type="video/mp4"
              ></source>
            </video>
            <div className="page-description-container">
              <div className="title-container hidden">
                <h1>
                  WELCOME TO <br /> <span>Philippines</span>
                </h1>
              </div>
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="phrase-container hidden">
                <p>
                  Embark on a journey like no other through pristine
                  <br />
                  beaches, majestic mountains, and vibrant cultural <br />{" "}
                  heritage
                </p>
              </div>

              <div className="feature-tours-container hidden">
                <h1>
                  Featured <span className="tours">Tours</span>{" "}
                  <span className="font">
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="Section-2-halfPage">
          <div className="main-container ">
            <div className="upper-half-container">
              <div className="pic-left pic">
                <div className="overlay"> </div>
                <div className="text">Travel Tips & info</div>
              </div>
              <div className="pic-middle pic">
                <div className="overlay"></div>
                <div className="text">What to do</div>
              </div>
              <div className="pic-right pic">
                <div className="overlay"></div>
                <div className="text">Where to Go</div>
              </div>
            </div>
            {/*Slider portion*/}
            <div className="slider-container">
              <div className="slide-track">
                {/*IMAGE SLIDES*/}
                <div className="slide">
                  <img src="src/Logo/Cebu_Pacific_logo_PNG4.png" alt="" />
                </div>
                <div className="slide">
                  <img
                    src="src/Logo/Philippine_Airlines_transparent_background.png"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img src="src/Logo/2GO-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Cebgo-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/AirAsia_X_logo_PNG2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Qatar_Airways_logo_PNG2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Wendys-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Jollibee-Logo-PNG3.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Subway_logo_PNG4.png" alt="" />
                </div>

                {/*Doubled Pictures */}
                <div className="slide">
                  <img src="src/Logo/Cebu_Pacific_logo_PNG4.png" alt="" />
                </div>
                <div className="slide">
                  <img
                    src="src/Logo/Philippine_Airlines_transparent_background.png"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img src="src/Logo/2GO-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Cebgo-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/AirAsia_X_logo_PNG2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Qatar_Airways_logo_PNG2.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Wendys-Logo.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Jollibee-Logo-PNG3.png" alt="" />
                </div>
                <div className="slide">
                  <img src="src/Logo/Subway_logo_PNG4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Section-3-Video">
          <div className="main-container">
            <ReactPlayer
              url={"src/assets/Section3.mp4"}
              controls={true}
              playing={false}
              width={"100%"}
              height={"100vh"}
            />

            <div className="message-container hidden">
              <h1>Mabuhay</h1> <br />
              <p>
                Immerse in a tropical paradise. Explore Breathtaking
                destinations <br />
                discover hidden gems, and create unforgetable experiences. Dive{" "}
                <br />
                into crystal clear waters, uncover ancient ruinsand savor
                perfect <br />
                culinary delights. Join our Curated tours for an extraordinary
                adventure
              </p>
            </div>
          </div>
        </section>

        <section className="Section-4-SliderBackground">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="src/assets/1.jpeg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="src/assets/2.jpeg" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="src/assets/3.jpeg" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className="Section-5-DiscoverPH">
          <div className="main-container">
            <div className="header-container">
              <div className="title-container hidden">
                <h1>
                  DISCOVER THE JOY <br /> OF THE PHILIPPINES
                </h1>
              </div>
              <div className="subtext-container hidden">
                <p>
                  experience pure bliss in captivating beauty of the Philipines
                  - a destination that promises <br />
                  endless joy and unforgettable adventures
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="Section-6-Vertical-Images">
          <div className="main-container grid">
            <div className="description-container hidden">
              <div className="img-container">
                <img src="src/Section-6-Images/whale.jpeg" alt="whale" />
              </div>

              <div className="title-container">
                <div className="title">
                  <h1>
                    {" "}
                    Whale <br />
                    Sharks
                  </h1>
                </div>
                <div className="definition-container">
                  <p>
                    Dive into an unforgettable adventure and swim <br />
                    alongside gentle giants - the magnificent whale <br />
                    sharks !
                  </p>
                </div>
              </div>
            </div>

            <div className="TubatahaReefs-container hidden">
              <div className="img-container item">
                <img src="src/Section-6-Images/reef.jpeg" alt="" />
              </div>

              <div className="tub-description-container item">
                <div className="title-container">
                  <h1>Tubataha Reefs</h1>
                </div>
                <div className="definition-container">
                  <p>
                    Explore the captivating wonders of <br />
                    Tubataha Reefs, a <span>
                      UNESCO WORLD HERITAGE SITE
                    </span>{" "}
                    <br />
                    teeming with vibrant coral reefs and a diverse array <br />
                    of marine life in the Philipines
                  </p>
                </div>
              </div>
            </div>

            <div className="PristineBeach-container hidden">
              <div className="img-container-Beach">
                <img src="src/Section-6-Images/beach.jpeg" alt="" />
              </div>

              <div className="beach-description-container">
                <div className="title-container">
                  <h1>Pristine Beaches</h1>
                </div>
                <div className="beach-definition-container">
                  <p>
                    Immerse yourself in paradise as you bask in the <br />
                    sun kissed shored and torquoise waters of the <br />
                    Philippines' Breathtaking beaches , offering idyllic <br />
                    escapes and unforgetable coastal experience
                  </p>
                </div>
              </div>
            </div>

            <div className="festivities-container hidden">
              <div className="festive-img-container link">
                <img src="src/Section-6-Images/festive.jpeg" alt="" />
              </div>
              <div className="festive-description-container link">
                <div className="title-container ">
                  <h1>
                    THE <br /> FESTIVITIES
                  </h1>
                </div>
                <div className="festive-definition-container ">
                  <p>
                    {" "}
                    Embrace on a cultural journey like no other as you <br />
                    witness the vibrant and lively Philippine Festivals. <br />
                    A kaleidoscope of color,music , dance and traditional <br />
                    celebrations that showcase the country's rich <br />
                    heritage
                  </p>
                </div>
              </div>
            </div>

            <div className="the-rice-container hidden">
              <div className="rice-img-container">
                <img src="src/Section-6-Images/rice.jpeg" alt="" />
              </div>

              <div className="rice-description-container">
                <div className="rice-title-container">
                  <h1>THE RICE <br /> TERRACES</h1>
                </div>

                <div className="rice-definition-container">
                  <p>Marvel at the engineering marvel of the Rice <br />
                  Terraces, awe-inspiring landscapes carved into the <br />
                  mountainside by indigenous communities in the  <br />
                  Philippines, showcasing centuries old farming <br />
                  techniques and Breathtaking panoramas.</p>
                </div>
              </div>
            </div>
          </div>


          <div className="footer-container">
            <div className="main-container">
              <div className="footer-description-container">
                <div className="header-container">
                  <h1>START YOUR <br /> JOURNEY TODAY!</h1>
                </div>
                <div className="subtxt-container">
                  <p>Embrace the Philippiines, live life to the fullest, and uncover a world of <br />
                  pristine beaches, vibrant festivals, mesmerizing waterfalls, andawe-inspiring <br />
                  landscapes like never before!</p>
                </div>
              </div>

              <div className="btn-container">
                <button>Book now</button>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default App;
