import React, { useState } from "react";
import styled from "styled-components";
import { PieChart, Pie, Tooltip } from "recharts";

// Styled components
const CardContent = styled.p`
  background-color: white;
  font-size: 1rem;
  font-weight: 400;
`;
const CardContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  min-width: 270px;
  min-height: 220px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const PopupDiv = styled.div`
  display: ${({ isHovered }) => (isHovered ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f6f6ec;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 0;
  width: 200px;
  height: auto;
`;

const Chart = ({ data }) => (
  <PieChart width={100} height={100}>
    <Pie data={data} dataKey="value" outerRadius={50} fill="#323350" />
    <Tooltip />
  </PieChart>
);

// Reusable HoverdCard Component
const HoverdCard = ({ chartData, content }) => (
  <PopupDiv isHovered={true}>
    <Chart data={chartData} />
    <p>{content}</p>
  </PopupDiv>
);

const ProgressCard = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const data1 = [
    { name: "A", value: 700 },
    { name: "B", value: 1300 },
    { name: "C", value: 300 },
  ];

  return (
    <div data-aos="fade-up">
      <h1 className="bg-red-300"></h1>
      <div className="bg-white pt-8 pb-8 rounded-3xl ml-[4vw] mr-[4vw] mt-[2vw] -50">
        <div
          style={{ background: "#E1E2E2", color: "#323350" }}
          className="p-5 rounded-md"
        >
          <h1
            style={{ background: "#E1E2E2", color: "#323350" }}
            className="text-center mb-2 text-xl font-bold"
          >
            Services we offer
          </h1>
          <div
            style={{ background: "#E1E2E2" }}
            className="flex text-center flex-wrap gap-4"
          >
            <CardContainer
              onMouseEnter={() => handleMouseEnter("calories")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 7 }}
              className="flex-1 text-xl font-bold "
            >
              Today's Calories
              <CardContent className="bg-white">
                Track your daily calorie intake effortlessly. Log your meals and
                snacks to stay within your nutrition goals. Ensure balanced
                eating habits with our intuitive calorie tracker
              </CardContent>
              {hoveredItem === "calories" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("burnt")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 6 }}
              className="flex-1 text-xl font-bold"
            >
              Today's Burnt Calories
              <CardContent>
                Keep an eye on the calories you've burned through physical
                activities. Monitor your workouts and stay motivated. Achieve
                your fitness targets by balancing your calorie intake and
                expenditure.
              </CardContent>
              {hoveredItem === "burnt" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("remaining")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 5 }}
              className="flex-1 text-xl font-bold"
            >
              Remaining Calories
              <CardContent>
                Easily monitor the calories you have left for the day. Plan your
                meals and activities to stay within your goals. Keep your diet
                on track and achieve your fitness targets with our easy-to-use
                tracker.
              </CardContent>
              {hoveredItem === "remaining" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("weekly")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 4 }}
              className="flex-1 text-xl font-bold"
            >
              Weekly Progress
              <CardContent>
                Review your weekly calorie intake and expenditure. Identify
                trends and adjust your habits for better results. Stay motivated
                by visualizing your progress and achieving your fitness goals
                each week.
              </CardContent>
              {hoveredItem === "weekly" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("monthly")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 3 }}
              className="flex-1 text-xl font-bold"
            >
              This Month's Total Calories
              <CardContent>
                Track your monthly calorie consumption to see the bigger
                picture. Analyze your eating habits and make informed decisions
                to stay on track with your health goals. Celebrate your progress
                and adjust as needed to maintain balance.
              </CardContent>
              {hoveredItem === "monthly" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("burntMonth")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 2 }}
              className="flex-1 text-xl font-bold"
            >
              Burnt This Month
              <CardContent>
                Monitor the total calories you've burned this month. Gain
                insights into your activity levels and see how your efforts are
                paying off. Stay motivated and keep pushing towards your fitness
                goals.
              </CardContent>
              {hoveredItem === "burntMonth" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("currentBMI")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350", zIndex: 1 }}
              className="flex-1 text-xl font-bold"
            >
              Current BMI
              <CardContent>
                Track your Body Mass Index to understand your current health
                status. See how your diet and exercise routines are affecting
                your BMI and make informed decisions to achieve your desired
                fitness level.
              </CardContent>
              {hoveredItem === "currentBMI" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
            <CardContainer
              onMouseEnter={() => handleMouseEnter("activity")}
              onMouseLeave={handleMouseLeave}
              style={{ color: "#323350" }}
              className="flex-1 text-xl font-bold"
            >
              Physical Activity
              <CardContent>
                Monitor your daily activity levels and how they contribute to
                your overall fitness goals. Track your workouts, steps, and
                other physical activities to stay on top of your health and make
                adjustments as needed.
              </CardContent>
              {hoveredItem === "activity" && (
                <HoverdCard
                  chartData={data1}
                  content="Additional details about today's burnt calories."
                />
              )}
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
