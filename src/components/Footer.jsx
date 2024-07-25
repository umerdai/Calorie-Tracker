import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Styled components
const GreyBackground = styled.div`
  background-color: rgb(225, 226, 226); /* Light grey */
  color: #323350;
  padding: 1rem;
  div,
  p,
  ul,
  li {
    color: #323350;
    background-color: rgb(225, 226, 226);
  }
`;

const GreyParagraph = styled.p`
  text-decoration: underline;
  padding-bottom: 0.5rem; /* Added padding for better appearance */
`;

const GreyListItem = styled.li`
  padding: 0.5rem; /* Added padding for better appearance */
`;

const GreyList = styled.ul`
  padding: 0;
`;

const GreyAnchor = styled.a`
  text-decoration: none;
`;

// Footer Component
const Footer = () => {
  return (
    <footer>
      <GreyBackground className="flex justify-around mt-[6vw]">
        <GreyBackground>
          <GreyParagraph>Company</GreyParagraph>
          <GreyList>
            <GreyListItem>About US</GreyListItem>
            <GreyListItem>Our Services</GreyListItem>
            <GreyListItem>Privacy Policy</GreyListItem>
            <GreyListItem>Affiliate Program</GreyListItem>
          </GreyList>
        </GreyBackground>
        <GreyBackground>
          <GreyParagraph>Get Help</GreyParagraph>
          <GreyList>
            <GreyListItem>FAQ</GreyListItem>
            <GreyListItem>Cancel Subscription</GreyListItem>
            <GreyListItem>Package Status</GreyListItem>
            <GreyListItem>Payment Option</GreyListItem>
          </GreyList>
        </GreyBackground>
        <GreyBackground>
          <GreyParagraph>Follow Us</GreyParagraph>
          <GreyBackground>
            <GreyList className="flex justify-around flex-wrap gap-4">
              <li>
                <GreyAnchor href="">
                  <i
                    className="fab fa-facebook fa-2x"
                    style={{ color: "#323350" }}
                  ></i>
                </GreyAnchor>
              </li>
              <li>
                <GreyAnchor href="">
                  <i
                    className="fab fa-twitter fa-2x"
                    style={{ color: "#323350" }}
                  ></i>
                </GreyAnchor>
              </li>
              <li>
                <GreyAnchor href="">
                  <i
                    className="fab fa-instagram fa-2x rounded-3xl"
                    style={{ color: "#323350" }}
                  ></i>
                </GreyAnchor>
              </li>
              <li>
                <GreyAnchor href="">
                  <i
                    className="fab fa-linkedin fa-2x"
                    style={{ color: "#323350" }}
                  ></i>
                </GreyAnchor>
              </li>
            </GreyList>
          </GreyBackground>
        </GreyBackground>
      </GreyBackground>
    </footer>
  );
};

export default Footer;
