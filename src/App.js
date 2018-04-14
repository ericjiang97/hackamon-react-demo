import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomCard from "./components/RoomCard";
import "whatwg-fetch";

const rooms = [
  {
    roomCode: "S11_LECTURE_HALL",
    roomLocation: "17 Rainforest Walk",
    roomPicture:
      "https://www.monash.edu/__data/assets/image/0009/292365/science-lecture-theatre1.jpg",
    unitCode: "FIT1008"
  },
  {
    roomCode: "S12_LECTURE_HALL",
    roomLocation: "17 Rainforest Walk",
    roomPicture:
      "https://www.monash.edu/__data/assets/image/0009/292365/science-lecture-theatre1.jpg",
    unitCode: "ENG1003"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {rooms.map((room, index) => (
          <RoomCard
            roomCode={room.roomCode}
            roomLocation={room.roomLocation}
            roomPicture={room.roomPicture}
            unitCode={room.unitCode}
          />
        ))}
      </div>
    );
  }
}

export default App;
