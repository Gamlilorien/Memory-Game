import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Game Over! Play again? \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1});
          this.state.friends.sort(() => Math.random() - 0.5)
            if(this.state.score === 11) {
              this.setState({highscore: this.state.score +1});
              this.setState({score: 0});
              this.state.friends.forEach(friend => {
                friend.count = 0;
              });
              alert(`Yay, you won! :) \nscore: ${this.state.score +1}`);
            }
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Come on and Click a Friend</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
