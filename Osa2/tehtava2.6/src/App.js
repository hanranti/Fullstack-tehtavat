import React from 'react';

const Person = ({ person }) => (
  <li>
    {person.name}
  </li>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addName = (event) => {
    event.preventDefault()
    let containsNewName = false;
    this.state.persons.forEach(person => {
      if (person.name === this.state.newName) {
        containsNewName = true
      }
    })
    if (!containsNewName) {
      this.setState({
        persons: this.state.persons.concat({ name: this.state.newName }),
        newName: ""
      })
    } else {
      this.setState({ newName: "" })
      alert("Nimi on jo lisätty puhelinluetteloon!")
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <div>
          <ul>
            {this.state.persons.map((person) => <Person key={person.name} person={person} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
