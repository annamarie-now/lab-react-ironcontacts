import React, { Component } from "react";
// import { threadId } from "worker_threads";
// import contacts from "./contacts.json";

export default class ActorList extends Component {
  state = {
    data: this.props.data
  };

  render() {
    console.log(this.state.data);
    const actorData = this.state.data
      .map(actor => {
        return (
          <tr key={actor.name}>
            <td>
              <img
                src={actor.pictureUrl}
                style={{
                  height: "100px"
                }}
                alt=""
              />
            </td>
            <td>{actor.name}</td>
            <td>{actor.popularity.toFixed(2)}</td>
          </tr>
        );
      })
      .slice(0, 5);

    return <>{actorData}</>;
  }
}
