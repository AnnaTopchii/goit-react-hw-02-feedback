import React, { Component } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const totalFeedbacks = values.reduce((acc, value) => acc + value, 0);

    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveValue = this.state.good;
    const persantage = Math.round(
      (positiveValue / this.countTotalFeedback()) * 100
    );

    return persantage;
  };

  handleBtnClick = e => {
    const option = e.target.value;

    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}
