import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgVideo from "../assets/VideoBg.mp4"; // Adjust path as needed
import "./Content.css";

function Content() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
    <div className="container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div data-aos="fade-up" className="text-center text-white p-6  rounded-lg ">
          <h1 className="text-4xl mb-4">Join Us on Our Fitness Journey!</h1>
          <p className="text-xl mb-4">
            Transform your life with our personalized plans, expert guidance, and supportive community.
          </p>
          <p className="text-xl mb-4">
            Start today and achieve your weight loss and exercise goals with Track it.
          </p>
          <p className="text-xl">
            Together, we can make a healthier, happier you!
          </p>
        </div>
    </div>
    </div>
  );
}

export default Content;
