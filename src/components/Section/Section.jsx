import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notificationcount } from "components/Notification/Notification";
import { Statistics } from "components/Statistics/Statistics";
import { Component } from "react";

export class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      handleFeedback = option => {
        this.setState(prevState => {
          return {
            [option]: prevState[option] + 1,
          };
        });
      };
      countTotalFeedback() {
        const { good, bad, neutral } = this.state;
        const total = good + bad + neutral;
        return total;
      }
    
      countPositiveFeedbackPercentage() {
        const positivePercentage =
          (this.state.good / this.countTotalFeedback()) * 100;
    
        return Math.round(positivePercentage);
      }
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        return(<>
            <section className="ms-5">
                <h2>{ this.props.title }</h2>
                <FeedbackOptions options={[...Object.keys(this.state)]} onLeaveFeedback={this.handleFeedback} />
                {total === 0 ? (
          <Notificationcount message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        )}
            </section>
        </>)
    } 
}