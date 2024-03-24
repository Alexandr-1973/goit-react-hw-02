import css from "./Options.module.css";

const Options = ({
  feedbacks,
  handleClick,
  totalFeedback,
  upperNameButton,
}) => {
  return (
    <ul className={css.options}>
      {Object.keys(feedbacks).map((feedbacksKey) => {
        return (
          <li key={Math.random()}>
            <button
              className={css.btn}
              onClick={(event) =>
                handleClick(event.target.textContent.toLowerCase())
              }
            >
              {upperNameButton(feedbacksKey)}
            </button>
          </li>
        );
      })}

      {totalFeedback > 0 && (
        <li>
          <button
            className={css.btn}
            onClick={(event) => handleClick(event.target.textContent)}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
