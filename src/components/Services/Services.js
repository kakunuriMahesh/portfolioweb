import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-5 px-10 h-screen flex items-center text-gray-400">
      <div className="container mx-auto">
        <h1 className="text-xl text-pink-500">Services</h1>
        <h1 className="text-2xl font-bold text-white pb-4">What I do</h1>
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-800 p-5 rounded-lg m-3">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-design-img.png"
              className="h-10 w-10 mb-2"
              alt="Static Websites"
            />
            <h1 className="text-white text-xl mb-2">Static Websites</h1>
            <p className="text-gray-400 text-sm">
              A Static Website contains Web pages with fixed content. Each page
              is developed using HTML and displays the same information to every
              visitor.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg m-3">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-web-development-img.png"
              className="h-10 w-10 mb-2"
              alt="Responsive Web design"
            />
            <h1 className="text-white text-xl mb-2">Responsive Web design</h1>
            <p className="text-gray-400 text-sm">
              Responsive Web design is the approach that suggests that design
              and development should respond to the user's behaviour and
              environment based on screen size, platform and orientation.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg m-3">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-customize-img.png"
              className="h-10 w-10 mb-2"
              alt="Customisable Layouts"
            />
            <h1 className="text-white text-xl mb-2">Customisable Layouts</h1>
            <p className="text-gray-400 text-sm">
              Customisable sites are templates with set layouts. You may be able
              to change photos and colors, but your site will look similar to
              many other sites due to the template. The same goes for...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
