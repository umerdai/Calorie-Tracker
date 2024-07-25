import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css"; // Import AOS styles

const ImageSize = styled.img`
  width: 200px;
  height: 200px;
`;
const Partners = () => {
  return (
    <div className="">
      <h1
        data-aos="fade-right"
        className="text-center m-10 font-bold text-3xl overflow-x-hidden "
      >
        Our Partners
      </h1>
      <div className="flex flex-wrap justify-around">
        {/* Your component code here */}
        <div data-aos="fade-right">
          <ImageSize src="Garmin logo.png" alt="Image 1" />
          <h1 className="text-center">Garmin</h1>
        </div>
        <div data-aos="fade-up">
          <ImageSize src="Yummly logo.png" alt="Image 2" />
          <h1 className="text-center">Yummly</h1>
        </div>
        <div data-aos="fade-down">
          <ImageSize src="Peloton logo.png" alt="Image 3" />
          <h1 className="text-center">Peloton</h1>
        </div>
        <div data-aos="fade-up">
          <ImageSize src="Headspace logo.png" alt="Image 4" />
          <h1 className="text-center">Headspace</h1>
        </div>
        <div data-aos="fade-left">
          <ImageSize src="Calm logo.png" alt="Image 5" />
          <h1 className="text-center">Calm</h1>
        </div>
      </div>
    </div>
  );
};

export default Partners;
