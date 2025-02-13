import React from "react";
import "./About.css";
import Navbar from "../NAVBAR/Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faMobile,
  faMicrochip,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about">
      {/* <div className='about_navbar'>
            <Navbar/>
        </div> */}
      <div className="about_section">
        <div className="about_section1">
          <h1 style={{ marginBottom: "1vh" }}>About Me</h1>
          <div className="line1"></div>
        </div>
        <div className="text">
          <p>
            Hi, I'm Madhukar Reddy, an engineering student at UMKC pursuing
            computer science with a passion for crafting innovative digital
            solutions. With expertise in web development, machine learning,data
            science and app development, I thrive on creating practical,
            user-centric applications that solve real-world problems.
          </p>
          <p>
            My approach combines technical proficiency with creativity to ensure
            that every project I undertake is not only functional but also
            engaging. I take pride in delivering efficient, visually appealing
            solutions tailored to user needs. Whether building robust back-end
            systems or designing sleek user interfaces, my goal is to transform
            ideas into impactful digital experiences
          </p>
        </div>
        <div className="about_section2">
          <h2>What I'm Doing</h2>

          <div className="about_work">
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faDesktop} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Web Development</h4>
                <p>
                  Designing and building dynamic, responsive, and user-friendly
                  websites with cutting-edge technology to deliver seamless
                  digital experiences.
                </p>
              </div>
            </div>
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faMicrochip} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Machine Learning</h4>
                <p>
                  Developing intelligent algorithms and predictive models to
                  solve complex problems, uncover insights, and automate
                  processes efficiently.
                </p>
              </div>
            </div>
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faMobile} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>App Development</h4>
                <p>
                  Creating intuitive and visually appealing mobile applications
                  that combine functionality with exceptional user experience
                  across platforms.
                </p>
              </div>
            </div>
            <div className="about_work_info_box">
              <div className="about_work_image">
                <FontAwesomeIcon icon={faChartSimple} size="2x" />
              </div>
              <div className="about_work_info">
                <h4>Data Science</h4>
                <p>
                  Transforming raw data into actionable insights through
                  advanced analytics, visualization, and machine learning
                  techniques to drive smarter decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
