import React, { Component } from "react";
import logo from './logo.svg';
import Pictures from "./components/pictures";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import pics from "./pictures.json";
import "./App.css";


const welcome = "Welcome to my App"

class App extends Component {
  state = {
    pics,
    score: 0,
    highScore: 0
  };

  gameEnd = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.pics.forEach(picture => {
      picture.count = 0;
    });
    alert('Game Over! Score:' + " " + this.state.score);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.pics.find((j, i) => {
      if (j.id === id) {
        if(pics[i].count === 0) {
          pics[i].count = pics[i].count + 1;
          this.setState({score:  this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.pics.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameEnd();
        }
      }
    });
  }

render() {
  return (
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
      {this.state.pics.map(picture => (
        <Pictures
          clickCount = {this.clickCount}
          id = {picture.id}
          key = {picture.id}
          image = {picture.image}
          />
      ))}
      </Wrapper>
  );      
}

};

export default App;
