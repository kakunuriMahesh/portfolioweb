import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div
      id="projects"
      className=" items-center  py-5 px-10 min-h-screen grid grid-row-3 text-gray-400 mt-[60px]" // Adjusted to account for navbar height
    >
      <div className="container mx-auto">
        <h1 className=" text-xl text-pink-500">My Work</h1>
        <div className="flex flex-wrap justify-center">
          <div className="relative overflow-hidden rounded-lg m-3 w-full sm:w-1/2 lg:w-1/3 group">
            <img
              src="https://nam-maheshkakunuri-portfolio.netlify.app/movie-image.jpg"
              alt="img"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex items-center justify-center flex-col p-5 text-center text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-0">
              <h3 className="font-medium mb-5 text-white">Movie-app Clone</h3>
              <p className="text-gray-300 font-semibold">
                Implemented responsive OTT platform app like Netflix/Amazon
                Clone where users can see movies like popular, trending,
                top-rated
              </p>
              <a
                href="https://maheshmovie.ccbp.tech/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-pink-500 text-lg rounded-full bg-white w-14 h-14 flex items-center justify-center"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          {/* Additional project cards */}
          {/* Two */}
          <div className="relative overflow-hidden rounded-lg m-3 w-full sm:w-1/2 lg:w-1/3 group">
            <img
              src="https://nam-maheshkakunuri-portfolio.netlify.app/emoji-img.jpg"
              alt="img"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex items-center justify-center flex-col p-5 text-center text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-0">
              <h3 className="font-medium mb-5 text-white">Emoji Game</h3>
              <p className="text-gray-300">Don't repeat the Emoji!</p>
              <a
                href="https://emojinam.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-pink-500 text-lg rounded-full bg-white w-14 h-14 flex items-center justify-center"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          {/* Three */}
          <div className="relative overflow-hidden rounded-lg m-3 w-full sm:w-1/2 lg:w-1/3 group">
            <img
              src="https://nam-maheshkakunuri-portfolio.netlify.app/calculater-img.jpg"
              alt="img"
              className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black to transparent rounded-lg flex items-center justify-center flex-col p-5 text-center text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-0">
              <h3 className="text-white mb-2">Money Manager</h3>
              <p className="text-white mb-4">
                Calculate your Income and Expenses
              </p>
              <a
                href="https://moneynam.ccbp.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-pink-500 text-lg rounded-full bg-white w-14 h-14 flex items-center justify-center"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://github.com/kakunuriMahesh"
          target="_blank"
          rel="noopener noreferrer"
          className="  w-[20%] text-center block mt-10 mx-auto border border-pink-500 py-3 px-10 rounded-lg text-black transition-all duration-500 hover:bg-pink-500 hover:text-white md: text-xs w-full"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
