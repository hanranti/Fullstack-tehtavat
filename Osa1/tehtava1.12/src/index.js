import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
)

const Anecdote = ({ anecdote, votes }) => (
    <div>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
    </div>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.getNextAnecdote(),
            mostPopular: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }

    getNextAnecdote = () => Math.floor(Math.random() * anecdotes.length)

    setNextAnecdote = () => this.setState({ selected: this.getNextAnecdote() })

    vote = () => {
        const newVotes = [...this.state.votes]
        newVotes[this.state.selected] += 1
        this.setState({
            votes: newVotes
        }, () => {
            if (this.state.votes[this.state.selected] > newVotes[this.state.mostPopular])
                this.setState({ mostPopular: this.state.selected })
        })
    }

    render() {
        return (
            <div>
                <Anecdote anecdote={this.props.anecdotes[this.state.selected]} votes={this.state.votes[this.state.selected]} />
                <Button text={"vote"} onClick={this.vote} />
                <Button text={"next anecdote"} onClick={this.setNextAnecdote} />
                <h1>anecdote with most votes:</h1>
                <Anecdote anecdote={this.props.anecdotes[this.state.mostPopular]} votes={this.state.votes[this.state.mostPopular]} />
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
