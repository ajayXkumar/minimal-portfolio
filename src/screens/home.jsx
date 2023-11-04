import React from "react";
import "../styles/home.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const educationSectionRef = useRef(null);
  const scrollToEducation = () => {
    if (educationSectionRef.current) {
      educationSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillSectionRef = useRef(null);
  const scrollToskill = () => {
    if (skillSectionRef.current) {
      skillSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projectSectionRef = useRef(null);
  const scrollToproject = () => {
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactSectionRef = useRef(null);
  const scrollTocontact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li onClick={scrollToEducation}>Education</li>
          <li onClick={scrollToskill}>Skills</li>
          <li onClick={scrollToproject}>Projects</li>
          <li onClick={scrollTocontact}>Contact</li>
        </ul>
      </div>
      <div className="hero-section">
        <div className="main-text">
          <h1>Hello , I am Ajay</h1>
          <p>
            I'm a CS student from NIT Jalandhar with a focus on web development,
            DSA, and UI design. My passion lies in creating efficient, visually
            appealing websites and crafting intuitive user interfaces. Let's
            collaborate and build the future of technology together!
          </p>
        </div>
        <img className="ajay" src="/ajay.png" />
        <div className="redd"></div>
      </div>

      <div className="education" ref={educationSectionRef}>
        <h2 style={{ fontWeight: "bold", width: "100vw" }}>Education</h2>
        <div className="college">
          <p style={{ display: "block", width: "400px", fontWeight: "bold" }}>
            B.Tech
          </p>
          <p>National institute of technology , jalandhar</p>
          <div className="progress-bar">
            <div className="progress-bar-content">7.45 cg</div>
          </div>
        </div>
        <div className="college">
          <p style={{ display: "block", width: "400px", fontWeight: "bold" }}>
            12th
          </p>
          <p>Rajat vidhyapeeth sr sec school , Sikar (Raj)</p>
          <div className="progress-bar2">
            <div className="progress-bar-content2">91%</div>
          </div>
        </div>
        <div className="college">
          <p style={{ display: "block", width: "400px", fontWeight: "bold" }}>
            10th
          </p>
          <p>Subhash chandra bose sr sec school ,Sahawa(Raj)</p>
          <div className="progress-bar3">
            <div className="progress-bar-content3">90.17%</div>
          </div>
        </div>
      </div>

      <div className="skills" ref={skillSectionRef}>
        <h2 style={{ fontWeight: "bold", width: "100vw" }}>Skills</h2>
        <div className="items">
          <img src="/html.png" />
          <p>html</p>
        </div>
        <div className="items">
          <img src="/css.png" />
          <p>css</p>
        </div>
        <div className="items">
          <img src="/javas.png" />
          <p>javascript</p>
        </div>
        <div className="items">
          <img src="/react.png" />
          <p>react</p>
        </div>
        <div className="items">
          <img src="/node.png" />
          <p>Node.js</p>
        </div>
        <div className="items">
          <img src="/express.png" />
          <p>express.js</p>
        </div>
        <div className="items">
          <img src="/mongo.png" />
          <p>mongodb</p>
        </div>
        <div className="items">
          <img src="/cpp.png" />
          <p>C++</p>
        </div>
        <div className="items">
          <img src="/sql.png" />
          <p>Sql</p>
        </div>
        <div className="items">
          <img src="/dsa.png" />
          <p>Dsa</p>
        </div>
      </div>

      <div className="projects" ref={projectSectionRef}>
        <h2 style={{ fontWeight: "bold", width: "100vw" }}>Projects</h2>

        <a
          href="https://sticky-uu68.onrender.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="oneproject">
            <img src="/sticky.png" />
            <p style={{fontWeight:"bold"}}>sticky notes</p>
            <p>Html, css, react, javascript</p>
          </div>
        </a>

        <a
          href="https://sticky-uu68.onrender.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="oneproject">
            <img src="/ecom.png" />
            <p style={{fontWeight:"bold"}}>Ecommerce</p>
            <p>MERN</p>
          </div>
        </a>
        <a
          href="https://sportz-x6vj.onrender.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="oneproject">
            <img src="/esports.png" />
            <p style={{fontWeight:"bold"}}>Esports</p>
            <p>only frontend</p>
          </div>
        </a>
        <a
          href="https://scramble-play.onrender.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="oneproject">
            <img src="/scramble.png" />
            <p style={{fontWeight:"bold"}}>Scramble play</p>
            <p>Html, css, react, javascript</p>
          </div>
        </a>
        <a
          href="https://github.com/ajayXkumar/GFGpix"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div class="oneproject">
            <img src="/gfg.png" />
            <p style={{fontWeight:"bold"}}>Gfg extension</p>
            <p>javascript</p>
          </div>
        </a>
      </div>
      <div>
        <div className="contact" ref={contactSectionRef}>
          <h2 style={{ fontWeight: "bold", width: "100vw" }}>Contact</h2>

          <a href="https://www.linkedin.com/in/ajay-kumar-b87905257/">
            <img src="/linkedin.png" />
            <p>Linkedin</p>
          </a>
          <a href="https://www.linkedin.com/in/ajay-kumar-b87905257/">
            <img src="/gmail.png" />
            <p>Gmail</p>
          </a>
          <a href="https://github.com/ajayXkumar">
            <img src="/git.png" />
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
