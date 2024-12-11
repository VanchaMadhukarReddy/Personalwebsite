import React, { useEffect, useState } from "react";
import avatar1 from "./Asserts/avatar-1.png";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faMobile,
  faCalendar,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 0 && width <= 1200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="portion1">
      <div className="contact">
        <div className="btn">
          <p onClick={handleToggle} style={{ margin: "0px", padding: "0px" }}>
            show more{" "}
          </p>
        </div>
        <div className="section1">
          <div className="img">
            <img src={avatar1} />
          </div>
          <div className="info">
            <h1 className="a1">Madhukar Reddy</h1>
            <p className="webdeveloper">Tech Visionary</p>
          </div>
        </div>
        <div className={isVisible ? "separator" : "none"}></div>
        <div className={isVisible ? "section2" : "none"}>
          <div className="email">
            <div className="emailimg">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </div>
            <div className="emailinfo">
              <p>
                <span>EMAIL</span>
              </p>
              <a href="mailto:Madhukarreddy@gmail.com" className="mail">
                vanchamadhukarreddy581@gmail.com
              </a>
            </div>
          </div>
          <div className="phn">
            <div className="phnimg">
              <FontAwesomeIcon icon={faMobile} size="1x" />
            </div>
            <div className="phninfo">
              <p>
                <span>PHONE</span>
              </p>
              <p>+19134379101</p>
            </div>
          </div>
          <div className="birth">
            <div className="birthimg">
              <FontAwesomeIcon icon={faCalendar} size="1x" />
            </div>
            <div className="birthinfo">
              <p>
                <span>BIRTHDAY</span>
              </p>
              <p>June 13,2002</p>
            </div>
          </div>
          <div className="loc">
            <div className="locimg">
              <FontAwesomeIcon icon={faLocation} size="1x" />
            </div>
            <div className="locinfo">
              <p>
                <span>LOCATION</span>
              </p>
              <p>Kansas City, Missouri</p>
            </div>
          </div>
        </div>
        <div className={isVisible ? "portion3" : "none"}>
          <a
            href="https://www.facebook.com/madhukar.reddy.7737769"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
          </a>
          <a
            href="https://www.instagram.com/banti_reddi?igsh=aW9maTJramZkMDIx"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/vancha-madhukar-reddy-755114237/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
