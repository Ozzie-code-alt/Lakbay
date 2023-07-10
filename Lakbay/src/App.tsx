import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function App() {
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
            <ul className="nav-lists">
              <li>Home</li>
              <li>Destination</li>
              <li>Offers</li>
              <li>About Us</li>
            </ul>

            <div className="BookNow-container">
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
              <div className="title-container">
                <h1>
                  WELCOME TO <br /> <span>Philippines</span>
                </h1>
              </div>
              <div className="img-container">
                <img src="" alt="" />
              </div>
              <div className="phrase-container">
                <p>
                  Embark on a journey like no other through pristine
                  <br />
                  beaches, majestic mountains, and vibrant cultural <br />{" "}
                  heritage
                </p>
              </div>

              <div className="feature-tours-container">
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

              {/*Slider portion*/}
              <div className="slider-container"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
