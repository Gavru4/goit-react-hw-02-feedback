const FeedbackList = ({ good, bad, neutral }) => {
  return (
    <ul>
      <h2>Please leave feedback</h2>
      <ul>
        <button onClick={good} type="button">
          Good
        </button>
      </ul>
      <ul>
        <button onClick={neutral} type="button">
          Neutral
        </button>
      </ul>
      <ul>
        <button onClick={bad} type="button">
          Bad
        </button>
      </ul>
    </ul>
  );
};

export default FeedbackList;
