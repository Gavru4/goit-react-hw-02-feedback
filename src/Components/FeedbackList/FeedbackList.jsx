import PropTypes from "prop-types";
import s from "./FeedbackList.module.css";

const FeedbackList = ({ good, bad, neutral }) => {
  return (
    <ul className={s.list}>
      <h2 className={s.title}>Please leave feedback</h2>
      <div className={s.wrapper}>
        <li>
          <button className={s.btn} onClick={good} type="button">
            Good
          </button>
        </li>
        <li>
          <button className={s.btn} onClick={neutral} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button className={s.btn} onClick={bad} type="button">
            Bad
          </button>
        </li>
      </div>
    </ul>
  );
};

export default FeedbackList;

FeedbackList.propTypes = {
  props: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
};
