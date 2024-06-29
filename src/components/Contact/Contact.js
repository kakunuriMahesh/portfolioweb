import React, { useState } from "react";
import pdfFile from './MaheshKakunuriResume.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "", // Capital "N"
    Email: "", // Capital "E"
    Message: "",
  });
  console.log(formData)

  const [msg, setMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbywU8lDO4OI3KkIr-kUgXFlLFnZq6NQF8Z9SIrlIolEKZPSTx7eaEKuME-hsUKJ8c6F/exec";
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(event.target),
      });
      if (response.ok) {
        setMsg("Thank you!");
        setTimeout(() => setMsg(""), 5000);
        setFormData({
          Name: "",
          Email: "",
          Message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  return (
    <div
      id="contact"
      className="py-5 px-10 h-[40%] flex flex-col justify-between items-center text-white bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="contact-left flex-basis-35 mb-10 md:mb-0">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="contact-icon mb-2">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              maheshkakunuri9@gmail.com
            </p>
            <p className="contact-icon mb-2">
              <i className="fa-solid fa-phone mr-2"></i>+91 9985875017
            </p>
            <div className="social-icons flex space-x-4 mt-4">
              <a href="mailto: maheshkakunuri9@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://github.com/kakunuriMahesh">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/_n.a.n.i_9/#">
                <i className="fa-brands fa-square-instagram"></i>
              </a>
            </div>
            <a
              href={pdfFile}
              download="MaheshR.pdf"
              className="btn btn2 mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded"
            >
              Download CV<i className="fa-solid fa-arrow-down-long ml-2"></i>
            </a>
          </div>
          <div className="contact-right flex-basis-60">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 mb-4 rounded"
              />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email} 
                onChange={handleChange}
                required
                className="w-full bg-gray-700 text-white p-4 mb-4 rounded"
              />
              <textarea
                name="Message"
                id="InputMsg"
                rows="6"
                placeholder="Your Message"
                className="w-full bg-gray-900 text-white p-4 mb-6 rounded"
                onChange={handleChange}
                value={formData.Message}
              ></textarea>
              <button
                type="submit"
                className="btn btn2 py-2 px-8 bg-pink-500 text-white rounded"
              >
                Submit
              </button>
            </form>
            <span id="msg" className="mt-4">
              {msg}
            </span>
          </div>
        </div>
      </div>
      <div className="copyright text-center py-4">
        <p>
          <i className="fa-regular fa-copyright"></i> nam@Mahesh Kakunuri
        </p>
      </div>
    </div>
  );
};

export default Contact;
