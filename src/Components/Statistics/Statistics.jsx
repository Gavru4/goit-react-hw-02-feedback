import StatisticsList from "./StatisticsList";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = (props) => {
  return (
    <ul className={s.list}>
      <h2 className={s.title}>Statistics</h2>
      {props.total > 0 ? (
        <StatisticsList props={props} />
      ) : (
        <span className={s.message}>There is no feedback</span>
      )}
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  props: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
