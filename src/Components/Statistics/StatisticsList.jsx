const StatisticsList = ({ props }) => {
  const { bad, good, neutral, total, positivePercentage } = props;
  return (
    <>
      <li>Goog: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage}%</li>
    </>
  );
};

export default StatisticsList;
