import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let defaultStyle = {
  color: "LimeGreen"
};

let fakeServerData = {
  user: {
    name: "James",
    playlists: [
      {
        name: "Favorites",
        songs: ["Lose Yourself to Dance", "Levels", "Not Giving In"]
      },
      {
        name: "Discover",
        songs: ["Cry Me A River", "Hans Solo Dies", "Third Orchestra"]
      },
      {
        name: "Hot Ones",
        songs: ["In Da Club", "Matchmacker", "Chronic"]
      },
      {
        name: "Sick Boy",
        songs: ["Rolling Stone", "La Women", "Fix You"]
      }
    ]
  }
};

class Aggregator extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={{ ...defaultStyle }}>
          {" "}
          {this.props.playlists && this.props.playlists.length} Text
        </h2>
      </div>
    );
  }
}

// If there is an object there, then find the length of that object

class Filter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle }}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "25%", display: "inline-block" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li> Song 1 </li>
          <li> Song 2 </li>
          <li> Song 3 </li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    this.setState({ serverData: fakeServerData });
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ ...defaultStyle }}>
          {this.state.serverData.user && this.state.serverData.user.name}s
          Playlists
        </h1>
        <Aggregator
          playlists={
            this.state.serverData.user && this.state.serverData.user.playlists
          }
        />
        <Aggregator />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
