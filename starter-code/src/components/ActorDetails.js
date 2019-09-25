import React, { Component } from "react";

export default class ActorDetails extends Component {
  state = {
    name: this.props.infos.name,
    picture: this.props.infos.pictureUrl,
    popularity: this.props.infos.popularity
  };
  render() {
    return (
      <>
        <tr>
          <td>
            <img
              src={this.state.picture}
              style={{
                height: "100px"
              }}
              alt=""
            />
          </td>
          <td>{this.state.name}</td>
          <td>{this.state.popularity}</td>
        </tr>
      </>
    );
  }
}
