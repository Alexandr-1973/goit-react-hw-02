import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";
import upperNameButton from "./components/utility.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbacksFromLS = JSON.parse(localStorage.getItem("feedbacksLsKey"));
    if (feedbacksFromLS) {
      return {
        ...feedbacksFromLS,
      };
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("feedbacksLsKey", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "Reset") {
      setFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    }
  };

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  const positiveValue = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        feedbacks={feedbacks}
        handleClick={updateFeedback}
        totalFeedback={totalFeedback}
        upperNameButton={upperNameButton}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveValue={positiveValue}
          upperNameButton={upperNameButton}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
