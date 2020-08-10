import React from 'react';
import Audio from "../assets/audio";

class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0
      },
      visitingTeamStats: {
        shots: 0,
        score: 0
      }
    }

    this.shotSound = new Audio("../assets/audio/Back+Board.wav")
    this.scoreSound = new Audio("../assets/audio/Ball+Hit+Cheer.wav")


  }


  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`
    let score = this.state[teamStatsKey].score
    this.shotSound.play()

    if (Math.random() > 0.5) {
      score += 1

      setTimeout(() => {
        this.scoreSound.play()
      }, 50)
    }
    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score: score
      }
    }))


  }

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0
      },

      visitingTeamStats: {
        shots: 0,
        score: 0
      }

    }))
  }


  
  render() {
    return (

      <div className="Game">
<h2>Game</h2>
<div className="sports">
  <img src={this.props.images} alt={this.props.alt} />
</div>
 <button onclick={this.playSound}>Play sound</button>
</div>
    )

    }
  } 

export default Game;