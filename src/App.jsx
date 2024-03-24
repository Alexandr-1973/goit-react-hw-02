import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";

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
  });

  function upperNameButton(word) {
    let nameButton = "";
    for (let letter of word.split("")) {
      if (letter === word[0]) {
        letter = word[0].toUpperCase();
      }
      nameButton += letter;
    }
    return nameButton;
  }

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
          good={good}
          upperNameButton={upperNameButton}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
