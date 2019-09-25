import React, { Component } from "react";
import "./App.css";
import ActorList from "./ActorList";
import contacts from "./contacts.json";
import ActorDetails from "./components/ActorDetails";

class App extends Component {
  state = {
    data: contacts.slice(0, 5)
  };
  randomActor = () => {
    const randIndex = Math.floor(Math.random() * contacts.length) + 5;
    //const newActor = <ActorDetails infos={this.state.data[randIndex]} />;
    const newActor = contacts[randIndex];
    let newActors = [...this.state.data];
    newActors.push(newActor);
    this.setState({
      data: newActors
    });
  };

  render() {
    const listOfActors = this.state.data.map(actor => {
      return <ActorDetails key={actor.id} infos={actor} />;
    });
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.randomActor}>Add random actor</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {listOfActors}
        </table>
      </div>
    );
  }
}

export default App;
