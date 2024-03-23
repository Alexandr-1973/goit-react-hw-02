import { useState } from "react";
import "./App.css";
import Description from "./components/description/Description.jsx";
import Options from "./components/options/Options.jsx";
import Feedback from "./components/feedback/Feedback.jsx";
import Notification from "./components/notification/Notification.jsx";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const { good, neutral, bad } = feedbacks;
  const totalFeedback = good + neutral + bad;
  console.log(totalFeedback);

  return (
    <>
      <Description />
      <Options feedbacks={feedbacks} handleClick={updateFeedback} />

      {totalFeedback > 0 ? (
        <Feedback feedbacks={feedbacks} />
      ) : (
        <Notification />
      )}

      {/* <Feedback feedbacks={feedbacks} /> */}
    </>
  );
}

export default App;
