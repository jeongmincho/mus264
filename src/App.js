import React, { Component } from "react";
import ReactGA from "react-ga";
import ReactPlayer from "react-player";
import { songArray } from "./assets/Songs.js";
import Buttons from "./components/Buttons.js";
import "./App.css";

ReactGA.initialize("UA-135966055-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    weekFlag: null,
    lucky: null,
    query: "",
    songs: [...songArray]
  };

  createElements = () => {
    let table = [];
    var flag = this.state.weekFlag;
    var query = this.state.query;
    var lucky = this.state.lucky;
    this.state.songs.forEach(function(tune, index) {
      if (flag === null && query === "" && index === lucky) {
        table.push(
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            key={tune.title}
            controls
          />
        );
        table.push(<p className="luckyTitle">{tune.title}</p>);
      }
      if (
        query.length > 3 &&
        flag === null &&
        tune.title.toLowerCase().includes(query.toLowerCase())
      ) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            key={tune.title}
            controls
          />
        );
      }
      if (flag === tune.week) {
        table.push(<p>{tune.title}</p>);
        table.push(
          <ReactPlayer
            className="player"
            width={"100%"}
            height={50}
            url={tune.link}
            controls
            key={tune.title}
          />
        );
      }
    });
    return table;
  };

  toggleLuckyHandler = () => {
    const max = this.state.songs.length;
    const min = 120;
    let luckNum = Math.floor(Math.random() * (max - min)) + min;
    this.search.value = "";
    this.setState({
      query: "",
      weekFlag: null,
      lucky: luckNum
    });
  };

  toggleWeekHandler = num => {
    var flag = this.state.weekFlag;
    this.search.value = "";
    if (flag === num) {
      this.setState({
        query: "",
        lucky: null,
        weekFlag: null
      });
    } else {
      this.setState({
        query: "",
        lucky: null,
        weekFlag: num
      });
    }
  };

  handleInputChange = () => {
    this.setState({
      weekFlag: null,
      lucky: null,
      query: this.search.value
    });
  };

  render() {
    return (
      <div className="container">
        <Buttons handler={this.toggleWeekHandler} />
        <div className="query">
          <input
            type="text"
            className="box"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <button id="button">
            <i className="fa fa-search" />
          </button>
        </div>
        <div className="luckyBox">
          <button className="lucky" onClick={this.toggleLuckyHandler}>
            Feeling lucky today? Click Me!
          </button>
        </div>
        <div className="content">{this.createElements()}</div>
        <div className="disclaimer">
          Works only on web, best on Chrome or Firefox
        </div>
        <div className="footer">
          <span id="heart">&#169;</span> because blackboard is an absolute pain
          in the derrière
        </div>
      </div>
    );
  }
}

export default App;
