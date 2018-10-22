import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ name, data, onClick }) => (
    <button onClick={() => onClick([data])}>
        {name}
    </button>
)

const Feedback = ({ giveFeedback }) => (
    <div>
        <h1>anna palautetta</h1>
        <Button name="hyvä" data="good" onClick={giveFeedback} />
        <Button name="neutraali" data="neutral" onClick={giveFeedback} />
        <Button name="huono" data="bad" onClick={giveFeedback} />
    </div>
)

const Statistic = ({ name, feedbacks }) => (
    <tr>
        <td>{name}</td>
        <td> {feedbacks}</td>
    </tr>
)

const EmptyStatistics = () => (
    <p>ei yhtään palautetta annettu</p>
)

const OneOrMoreStatistics = ({ feedbacks }) => (
    <table>
        <tbody>
            <Statistic name="hyvä" feedbacks={feedbacks.good} />
            <Statistic name="neutraali" feedbacks={feedbacks.neutral} />
            <Statistic name="huono" feedbacks={feedbacks.bad} />
            <Statistic name="keskiarvo" feedbacks={feedbacks.mean} />
            <Statistic name="positiivisia" feedbacks={feedbacks.positive} />
        </tbody>
    </table>
)

const Statistics = ({ feedbacks }) => (
    <div>
        <h1>statistiikka</h1>
        {
            ([feedbacks["good"], feedbacks["neutral"], feedbacks["bad"]].reduce((a, b) => a + b) !== 0)
                ? <OneOrMoreStatistics feedbacks={feedbacks} />
                : <EmptyStatistics />
        }
    </div>
)

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            mean: 0,
            positive: "0%"
        }
    }

    giveFeedback = (name) => {
        this.setState({
            [name]: this.state[name] + 1
        }, () => {
            this.countMean()
            this.countPositives()
        })
    }

    countMean = () => {
        this.setState({
            mean: Math.round(((this.state.good + -1 * this.state.bad) /
                (this.state.good + this.state.neutral + this.state.bad)) * 10) / 10
        })
    }

    countPositives = () => {
        this.setState({
            positive: Math.round((this.state.good /
                (this.state.good + this.state.neutral + this.state.bad)) * 1000) / 10 + "%"
        })
    }

    render() {
        return (
            <div>
                <Feedback giveFeedback={this.giveFeedback} />
                <Statistics feedbacks={this.state} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
