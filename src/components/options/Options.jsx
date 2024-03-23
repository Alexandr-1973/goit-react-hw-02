
const Options = ({ feedbacks, handleClick }) => {
  // const feedbacksKeys = Object.keys(feedbacks);
  // const feedbacksValues = Object.values(feedbacks);
  return (
    <ul>
      {/* {goo

            } */}
      {Object.keys(feedbacks).map((feedbacksKey) => {
        return (
          <li key={Math.random()}>
            <button
              onClick={(event) =>
                handleClick(event.target.textContent)
              }
            >
              {feedbacksKey}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Options;
