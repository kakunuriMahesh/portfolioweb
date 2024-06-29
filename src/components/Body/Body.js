import React from "react"; 
import pdfFile from './MaheshKakunuriResume.pdf';


const Body = () => {
  return (
    <div id="home" className="pt-16 pl-5 flex items-center h-screen">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://nam-maheshkakunuri-portfolio.netlify.app/homedesign.jpg')",
        }}
      >
        <div className="flex flex-col justify-center h-full">
          <p className="bg-black text-white w-24 p-2 rounded">Front End Developer</p>
          <h1 className="text-5xl font-bold">
            Hi,
            <br /> I'm <span className="text-red-500 text-2xl">
              Mahesh
            </span>{" "}
            Kakunuri
          </h1>
          <div className="mt-4">
            <a
              href="#contact"
              className="inline-block no-underline p-2 bg-red-500 text-white m-1 rounded hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
            >
              Contact Me
            </a>
            <a
            target="_blank"
              href={pdfFile}
              download="Mahesh_k_Resume.pdf"
              className="inline-block no-underline p-2 bg-red-500 text-white m-1 rounded hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
            >
              Download CV <i className="fa-solid fa-arrow-down-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body; 
