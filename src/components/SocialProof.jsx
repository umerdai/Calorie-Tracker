import React from "react";
import styled from "styled-components";

const ReviewCard = styled.div`
  background-color: #323350; /* Set background color */
  color: white; /* Text color */
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid black;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const PlaceholderImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
  justify-content: flex-start; /* Align items to the start (left) */
  gap: 0.5rem; /* Space between items */
  padding: 1rem;
  background-color: #323350; /* Set background color for the grid container */
`;

const SocialProof = () => {
  return (
    <div data-aos="flip-down">
      <h1 className="text-center mt-10 text-2xl font-bold text-black">
        Our Reviews
      </h1>
      <Container>
        <ReviewCard>
          <div className="flex items-center mb-2">
            <Avatar src="Women2.jpeg" alt="User Avatar" />
            <div>
              <h4 className="text-md font-semibold">John Doe</h4>
              <p className="text-gray-200 text-sm">Software Engineer</p>
            </div>
          </div>
          <p className="text-gray-200 text-sm mb-2">
            The Calorie Tracker is an indispensable tool for anyone serious
            about managing their health and fitness goals. The detailed reports
            and progress summaries are incredibly helpful for staying motivated
            and making informed decisions about diet and exercise. The
            integration with fitness trackers is seamless, and the personalized
            meal suggestions have made it easier to maintain a balanced diet.
          </p>
          <div className="flex items-center">
            <PlaceholderImage src="Women1.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Women4.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Women5.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Man5.jpeg" alt="Rating Star" />
          </div>
        </ReviewCard>

        <ReviewCard>
          <div className="flex items-center mb-2">
            <Avatar src="Man2.jpeg" alt="User Avatar" />
            <div>
              <h4 className="text-md font-semibold">Jane Smith</h4>
              <p className="text-gray-200 text-sm">College Teacher</p>
            </div>
          </div>
          <p className="text-gray-200 text-sm mb-2">
            The Exercise and Burnt Calories segment of the app is truly
            outstanding. It offers a comprehensive overview of your workouts and
            calorie expenditure, providing detailed insights into how your
            activities are contributing to your fitness goals. The feature to
            log different types of exercises and track their intensity helps in
            understanding your performance better.
          </p>
          <div className="flex items-center">
            <PlaceholderImage src="Women6.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Man3.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Women7.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Man2.jpeg" alt="Rating Star" />
          </div>
        </ReviewCard>

        <ReviewCard>
          <div className="flex items-center mb-2">
            <Avatar src="Man7.jpeg" alt="User Avatar" />
            <div>
              <h4 className="text-md font-semibold">Alex Johnson</h4>
              <p className="text-gray-200 text-sm">UX Designer</p>
            </div>
          </div>
          <p className="text-gray-200 text-sm mb-2">
            The customer service for this app is exceptional. From the moment
            you reach out, you're met with prompt and professional support. The
            team is knowledgeable and attentive, addressing any issues or
            questions with clear and helpful responses.
          </p>
          <div className="flex items-center">
            <PlaceholderImage src="Man6.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Man8.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Women8.jpeg" alt="Rating Star" />
            <PlaceholderImage src="Women9.jpeg" alt="Rating Star" />
          </div>
        </ReviewCard>
      </Container>
    </div>
  );
};

export default SocialProof;
