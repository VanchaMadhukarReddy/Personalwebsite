import React from "react";
import "./Resume.css";
import Navbar from "../NAVBAR/Navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const Resume = () => {
  return (
    <div className="Resume">
      {/* <div className="about_navbar">
        <Navbar />
      </div> */}
      <div className="Resume_section">
        <div className="Resume_section1">
          <h1 style={{ marginBottom: "1vh" }}>Resume</h1>
          <div className="line1"></div>
          <div className="Education">
            <div className="education_section1">
              <div className="education_section1_part1">
                <div className="Education_box">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
              </div>
              <h2
                style={{
                  margin: "0",
                  padding: "0",
                  marginBlockStart: "0",
                  marginBlockEnd: "0",
                  marginInlineStart: "0",
                  marginInlineEnd: "0",
                  lineHeight: "normal",
                }}
              >
                Education
              </h2>
            </div>
            <div className="Education_line">
              <div className="Education_line_inside"></div>
            </div>
            <div className="education_section2">
              <div className="education_section2_part1">
                <div className="big_circle">
                  <div className="small_circle"></div>
                </div>
                <div className="section2_line"></div>
              </div>
              <div className="education_section2_part2">
                <h3
                  style={{
                    margin: "0",
                    padding: "0",
                  }}
                >
                  University of Missouri-Kansas City (UMKC)
                </h3>
                <span>2021-2026</span>
                <div className="para">
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    UMKC is a leading research university that offers a dynamic
                    learning environment with a focus on innovation, technology,
                    and student success. As a student here, I am gaining
                    comprehensive knowledge in computer science, including web
                    development, machine learning, and data science
                  </p>
                </div>
              </div>
            </div>
            <div className="education_section2">
              <div className="education_section2_part1">
                <div className="big_circle">
                  <div className="small_circle"></div>
                </div>
                <div className="section2_line"></div>
              </div>
              <div className="education_section2_part2">
                <h3 style={{ margin: "0px" }}>The Narayana Group</h3>
                <span>2019-2021</span>
                <div className="para">
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    The Narayana Group is a prominent educational organization
                    in India, primarily known for its contributions to the field
                    of education, especially in the domain of competitive exams
                  </p>
                </div>
              </div>
            </div>
            <div className="education_section2">
              <div className="education_section2_part1">
                <div className="big_circle">
                  <div className="small_circle"></div>
                </div>
                {/* <div className="section2_line"></div> */}
              </div>
              <div className="education_section2_part2">
                <h3 style={{ margin: "0px" }}>Sri Sai Public School</h3>
                <span>2006-2019</span>
                <div className="para">
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      boxSizing: "border-box",
                      width: "100%",
                    }}
                  >
                    Sri Sai Public School, is primarily known for its
                    educational services, including coaching for competitive
                    exams and K-12 schooling. Within the Sri Sai Group, there
                    are Sri Sai Schools, which are a part of their K-12
                    educational offerings. eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume_section2">
          <h2>My Skills</h2>
          <div className="resume_section2_part1">
            {/* ------------------------------------------------------------------------------------- */}
            <div div className="resume_section2_part2">
              <div className="resume_section2_part3">
                <div className="head_part">
                  <h3>PROGRAMING LANGUAGES</h3>
                </div>
                <span>
                  PYTHON<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  JAVA<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  C<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  C++<span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  R<span className="s">80%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}

            <div div className="resume_section2_part2">
              <div className="resume_section2_part3">
                <div className="head_part">
                  <h3>FRONT-END DEVELOPMENT</h3>
                </div>
                <span>
                  HTML<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  CSS<span className="s">80%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  JAVASCRIPT
                  <span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  REACT-JS<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------------------------------------------- */}
            <div div className="resume_section2_part2">
              <div className="resume_section2_part3">
                <div className="head_part">
                  <h3>AI&ML</h3>
                </div>
                <span>
                  NUMPY<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  PANDAS<span className="s">80%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  MATPLOTLIB
                  <span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  SEABORN<span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="resume_section2_part2">
              <div className="resume_section2_part3">
                <div className="head_part">
                  <h3>BACK-END DEVELOPMENT</h3>
                </div>
                <span>
                  NODE-JS<span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "white",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  EXPRESS-JS<span className="s">80%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  FLASK
                  <span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  DJANGO<span className="s">70%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "70%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            {/*----------------------------------------------------------------------------------------------------------  */}
            <div className="resume_section2_part2">
              <div className="resume_section2_part3">
                <div className="head_part">
                  <h3>DATABASE</h3>
                </div>
                <span>
                  SQL<span className="s">90%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "90%",
                      backgroundColor: "white",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
              <div className="resume_section2_part3">
                <span>
                  MONGO-DB<span className="s">80%</span>
                </span>
                <div className="skill_line">
                  <div
                    style={{
                      width: "80%",
                      backgroundColor: "whitesmoke",
                      height: "100%",
                      borderRadius: "3vh",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Resume;
