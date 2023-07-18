import React, { Component } from "react";
import Section from "./Section/section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleLeaveFedback = (event) => {
        event.preventDefault();
        this.setState(prevState => ({[event.target.name] : prevState[event.target.name] + 1}));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;

        return total ? Math.ceil((good / total) * 100) : 0;
    }

    render()
    {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = ['good', 'neutral', 'bad'];

        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFedback} />
                </Section>

                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />) : (<Notification message="There is no feedback" />)}
                </Section>
            </div>
        )
    }
}