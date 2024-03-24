import css from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, good, upperNameButton }) => {
  return (
    <ul className={css.feedback}>
      {Object.keys(feedbacks).map((feedbacksKey) => {
        return (
          <li key={Math.random()}>
            <p>
              {upperNameButton(feedbacksKey)}: {feedbacks[feedbacksKey]}
            </p>
          </li>
        );
      })}

      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {Math.round((good / totalFeedback) * 100)}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
