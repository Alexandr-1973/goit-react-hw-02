const Feedback = ({ feedbacks }) => {
    // console.log(feedbacks);
  return (
    <ul>
      {Object.keys(feedbacks).map((feedbacksKey) => {
        return (
          <li key={Math.random()}>
            <p>
              {feedbacksKey}: {feedbacks[feedbacksKey]}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default Feedback;
