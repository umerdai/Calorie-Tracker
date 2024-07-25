import React from "react";
import styled from "styled-components";

// Define a styled button component
export const StyledButton = styled.button`
  background-color: #323350; // Custom background color
  color: white; // Text color
  margin-top: 1rem; // Margin top
  font-weight: bold; // Font weight
  padding: 0.5rem 1rem; // Padding
  border-radius: 0.5rem; // Rounded corners
  border: none; // No border
  cursor: pointer; // Pointer cursor on hover
  transition: background-color 0.3s ease; // Smooth transition for hover effect

  &:hover {
    background-color: #1a1a2e; // Custom hover background color
  }
`;

const PackagesOffered = () => {
  return (
    <div data-aos="fade-up" className="pt-8">
      <h1 className="text-center text-3xl font-bold">Packages Offered</h1>

      <div className="flex justify-center pt-10">
        {/* Add a wrapper div to apply flex properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center mx-4 border p-4 h-full">
            {/* Package 1 */}
            <h2 className="text-xl font-bold mb-2">Monthly Plan</h2>
            <p>Price: $9.99 per month</p>
            <ul className="flex-grow">
              <li>• Track daily intake and expenditure.</li>
              <li>• Get summaries of your weekly progress.</li>
              <li>• Access to a library of basic workout routines.</li>
              <li>• Log and categorize your meals.</li>
              <li>
                • Visualize your calorie intake and expenditure with charts.
              </li>
              <li>• Get support through email.</li>
              <li>
                • Access to a limited number of meal recipes and suggestions.
              </li>
            </ul>
            <StyledButton>Select</StyledButton>
          </div>
          <div className="flex flex-col items-center mx-4 border p-4 h-full">
            {/* Package 2 */}
            <h2 className="text-xl font-bold mb-2">6-Month Plan</h2>
            <p>Price: $49.99 (~$8.33/month)</p>
            <ul className="flex-grow">
              <li>• Access to more detailed and advanced workout routines.</li>
              <li>• Create and adjust meal plans based on your preferences.</li>
              <li>• More detailed monthly summaries of your progress.</li>
              <li>• Faster response times for support.</li>
              <li>
                • Access to a broader range of meal recipes and suggestions.
              </li>
              <li>• Sync data with fitness trackers and smartwatches.</li>
              <li>• Participate in exclusive fitness challenges.</li>
            </ul>
            <StyledButton>Select</StyledButton>
          </div>
          <div className="flex flex-col items-center mx-4 border p-4 h-full">
            {/* Package 3 */}
            <h2 className="text-xl font-bold mb-2">Annual Plan</h2>
            <p>Price: $89.99 (~$7.50/month)</p>
            <ul className="flex-grow">
              <li>
                • Access to an extensive library of recipes and meal ideas.
              </li>
              <li>• One-on-one sessions with a fitness coach (virtual).</li>
              <li>• Access to webinars and workshops on nutrition.</li>
              <li>• Set and adjust long-term fitness goals.</li>
              <li>• Enjoy an ad-free user experience.</li>
              <li>
                • In-depth analysis of your calorie tracking and progress.
              </li>
              <li>• Around-the-clock support with priority service.</li>
            </ul>
            <StyledButton>Select</StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesOffered;
