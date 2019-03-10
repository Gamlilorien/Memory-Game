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
    maxscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.maxscore) {
      this.setState({maxscore: this.state.score});
    }
    //reset all friend Count values for next game
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    //Show game over
    alert(`Gunter says Game Over! \nScore: ${this.state.score}`);
    //Reset Score to 0 for next game
    this.setState({score: 0});
    return true;
  }

  clickStatus = id => {
    this.state.friends.find((c, i) => {
      if (c.id === id) {
        if (friends[i].count === 0){
          friends[i].count = friends[i].count + 1;
          this.setState({score : this.state.score + 1});
          this.state.friends.sort(() => Math.random() - 0.5)
            if(this.state.score === 11) {
              this.setState({maxscore: this.state.score +1});
              this.setState({score: 0});
              this.state.friends.forEach(friend => {
                friend.count = 0;
              });
              //Show win message
              alert(`You Win!!! \n \nScore: ${this.state.score +1}`);
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
            clickStatus={this.clickStatus}
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
