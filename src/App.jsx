import "./App.css";
import { Component } from "react";
import FeedbackList from "./Components/FeedbackList/FeedbackList";
import Statistics from "./Components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onCliskGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  onCliskBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };
  onCliskNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return good ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <div>
        <FeedbackList
          good={this.onCliskGood}
          bad={this.onCliskBad}
          neutral={this.onCliskNeutral}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
