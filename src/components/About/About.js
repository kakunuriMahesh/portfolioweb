import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const skillTab = () => {
    setActiveTab("skills");
  };

  const educationTab = () => {
    setActiveTab("education");
  };
  const experience = () => {
    setActiveTab("experience");
  };

  return (
    <div id="about" className="py-5 px-10 h-[80vh] flex items-center">
      <div className="w-full">
        <div className="flex justify-between flex-wrap">
          <div className="w-full">
            <h1 className="text-xl text-pink-500">About me</h1>
            <p className="w-full">
              Passionate ReactJS Frontend developer with 2 years experience
              crafting dynamic web apps. Skilled in ReactJS, JavaScript and
              related technologies, adept at problem-solving for seamless user
              experiences. Proficient in front-end development, state
              management, and modern web technologies. Having Knowledge on
              Node.js and MySQL, enhancing cross-functional team communication.
              Committed to ensure high-quality code.
            </p>

            <div className="flex my-5 mb-10">
              <p
                className={`mr-12 text-lg font-medium cursor-pointer ${
                  activeTab === "skills" ? "border-b-2 border-pink-500" : ""
                }`}
                onClick={skillTab}
              >
                Skills
              </p>
              <p
                className={`mr-12 text-lg font-medium cursor-pointer ${
                  activeTab === "education" ? "border-b-2 border-pink-500" : ""
                }`}
                onClick={educationTab}
              >
                Education
              </p>
              <p
                className={`mr-12 text-lg font-medium cursor-pointer ${
                  activeTab === "experience" ? "border-b-2 border-pink-500" : ""
                }`}
                onClick={experience}
              >
                Experience
              </p>
            </div>
            <div className={`${activeTab === "skills" ? "block" : "hidden"}`}>
              <ul>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">Front End</span>
                  <br />
                  HTML, CSS, Bootstrap, JavaScript, React.js
                </li>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">Back End</span>
                  <br />
                  Python, Express, Node.js, Java
                </li>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">Databases</span>
                  <br />
                  SQLite
                </li>
              </ul>
            </div>
            <div
              className={`${activeTab === "education" ? "block" : "hidden"}`}
            >
              <ul>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">B-Tech</span>
                  <br />
                  EEE - 7.03 CGPA in 2022
                </li>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">Diploma</span>
                  <br />
                  EEE - 6.6 CGPA in 2018
                </li>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">SSC</span>
                  <br />
                  8.3 - CGPA in 2015
                </li>
              </ul>
            </div>
            <div
              className={`${activeTab === "experience" ? "block" : "hidden"}`}
            >
              <ul>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">
                    Front End Engineer
                  </span>
                  <br />
                  Shreyan IT - 06/2022 - Present Hyderabad, TG
                </li>
                <li>
                  -Developed and maintained Dynamic web applications using the
                  ReactJS.
                </li>
                <li>
                  -Translate design mock-ups from tools like Figma into
                  functional web interfaces using HTML, CSS, and JavaScript.
                </li>
                <li className="list-none my-2">
                  <span className="text-pink-500 text-sm">PROJECT</span>
                  <br />
                  HudsonPro-Policy Systems - 09/2022 - Present New York, USA
                </li>
                <li className="list-none my-2">
                  -HudsonPro has programs like Public D&O, Private D&O, FI,
                  Transactional, MPL, and GPL. This application offers creating
                  quotes, and converting quotes into policies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
