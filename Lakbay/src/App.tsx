import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
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
            <ul className="nav-lists hidden">
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
                          <img src="src/Logo/Philippine_Airlines_transparent_background.png" alt="" />
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
                          <img src="src/Logo/Philippine_Airlines_transparent_background.png" alt="" />
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

            
            <ReactPlayer url={"src/assets/Section3.mp4"} 
            controls ={true} 
            playing={false} 
            width={"100%"}
            height={"100vh"}    
            />   


            <div className="message-container hidden">
              <h1>Mabuhay</h1> <br />
              <p>Immerse in a tropical paradise. Explore Breathtaking destinations <br />
                discover hidden gems, and create unforgetable experiences. Dive <br />
                into crystal clear waters, uncover ancient ruinsand savor perfect <br />
                culinary delights. Join our Curated tours for an extraordinary adventure
              </p>
              </div>       
          </div>

          
        </section>


        <section className="Section-4-SliderBackground">
            <div className="main-container">
              
            </div>
        </section>




      </div>
    </>
  );
}

export default App;
