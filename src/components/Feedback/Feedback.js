// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import feedbcakData from "./feedbackData";

// const Feedback = () => {
//     const settings = {
//         dots: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         autoplay: true,
//         // autoplaySpeed: 1000,
//       };

//   return (
//     <div className=" h-full p-[20px] m-7">
//         <h1 className="text-xl text-green-500 font-bold mb-3">Fiverr Review</h1>
//         <Slider {...settings}>
//       {feedbcakData.map((eachFeed) => (
//         <div className="flex flex-row shadow p-8 hover:shadow-md duration-300 " >
//           <h2 className=" mr-5 bg-pink-500 h-[50px] w-[50px] p-3 rounded-[50px] text-center font-bold text-white uppercase">
//             {eachFeed.clintName[0]}
//           </h2>
//           <div>
//             <div className="">
//               <div>
//                 <h3>{eachFeed.clintName}</h3>
//                 <div className="flex">
//                   <img className=" w-6 mr-2" src={eachFeed.flag} alt="" />
//                   <p className=" text-gray-400">{eachFeed.location}</p>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <p>
//                 {"⭐".repeat(eachFeed.rating)} {eachFeed.rating}
//               </p>
//               <p>{eachFeed.feedBack}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//       </Slider>
//     </div>
//   );
// };

// export default Feedback;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feedbcakData from "./feedbackData";
import { useMediaQuery } from "react-responsive";

const Feedback = () => {
  const [settings, setSettings] = useState({
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
  });

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });

  useEffect(() => {
    if (isSmallScreen) {
      setSettings({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      });
    } else if (isLargeScreen) {
      setSettings({
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      });
    }
  }, [isSmallScreen, isMediumScreen, isLargeScreen]);

  return (
    <div className="h-full p-[20px] m-7">
      <div className="flex items-center">
      <img className=" rounded-[50%] outline-double outline-4 outline-green-600 mr-3" alt="" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/ffb60b894920a30ad43374cb5f2a7f21-1718090083375/aa371fad-0d8c-4ff0-be93-399f05751025.jpg"/>
      <h1 className="text-xl text-green-500 font-bold mb-3">Fiverr Review</h1>
      </div>
      <Slider {...settings}>
        {feedbcakData.map((eachFeed) => (
          <div>
            <div
              key={eachFeed.id}
              className=" flex shadow h-[250px] p-8 hover:shadow-md duration-300"
            >
              <h2 className="mr-5 bg-pink-500 h-[50px] w-[50px] p-3 rounded-[50px] text-center font-bold text-white uppercase">
                {eachFeed.clintName[0]}
              </h2>
              <div>
                <div className="">
                  <div className="">
                    <h3 className=" font-bold">{eachFeed.clintName}</h3>
                    <div className="flex">
                      <img className="w-6 mr-2" src={eachFeed.flag} alt="" />
                      <p className="text-gray-400">{eachFeed.location}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className=" text-xs">
                    {"⭐".repeat(eachFeed.rating)} <span className=" font-bold">{eachFeed.rating}</span> 
                  </p>
                  <p>{eachFeed.feedBack}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
