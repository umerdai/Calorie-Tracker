import { StyledButton } from "./PackagesOffered";
import styled from "styled-components";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const TableData = styled.td`
  background-color: #323350;
  color: white;
  padding: 10px;
`;

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4oszztz",
        "template_5bhtm55",
        form.current,
        "EKlVwCuUQErWfvJtM"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div data-aos="flip-left">
      <h1 className="text-center m-10  font-bold text-3xl mb-3.5">
        Contact Us
      </h1>
      <p className="text-center mb-7">We would love to help you.</p>
      <div className="flex justify-center">
        <div className="basis-2/5 p-5 ">
          <h3 className="text-xl font-semibold">Send Your Request</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-between space-x-4">
              <div className="flex-1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="John Elliott"
                  name="from_name"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="+92 333 155 3455"
                  name="user_phone"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="subject">Country</label>
                <input
                  type="text"
                  placeholder="America"
                  name="user_subject"
                  className="w-full p-2 mr-3 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="subject">City</label>
                <input
                  type="text"
                  placeholder="New York"
                  name="user_subject"
                  className="w-full p-2 mr-3 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div className="flex justify-between space-x-4">
              <div className="flex-1">
                <label htmlFor="email">Address</label>
                <input
                  type="text"
                  placeholder="House # 77-B, Street # 123"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="hello123@gmail.com"
                  name="user_email"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div>
              <div className="flex-1">
                <label htmlFor="subject">Reason for Inquiry</label>
                <input
                  type="text"
                  placeholder="Product Demo"
                  name="user_subject"
                  className="w-full p-2 mr-3 border border-gray-300 rounded mt-1"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here"
                name="message"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <StyledButton type="submit">Submit</StyledButton>
          </form>
        </div>
        <div style={{ background: "#323350" }} className="basis-1/4 p-5 mr-10 ">
          <h3 className="text-xl font-semibold text-white">Reach Us</h3>
          <table>
            <tbody>
              <tr>
                <TableData>Email:</TableData>
                <TableData>omerabdullah317@gmail.com</TableData>
              </tr>
              <tr>
                <TableData>Phone:</TableData>
                <TableData>+92 333 122 6630</TableData>
              </tr>
              <TableData>Customer Service Hotline:</TableData>
              <TableData>+92 333 6674 332</TableData>
              <tr>
                <TableData>Address:</TableData>
                <TableData>860 Montana Rapids Suite 686, New Jersey</TableData>
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
