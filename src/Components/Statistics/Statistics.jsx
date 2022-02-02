import StatisticsList from "./StatisticsList";

const Statistics = (props) => {
  return (
    <ul>
      <h2>Statistics</h2>
      <StatisticsList props={props} />
    </ul>
  );
};

export default Statistics;
