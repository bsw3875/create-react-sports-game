import React from 'react';
import "./App.css";
import Game from "./components/game/Game";
import "../../assets/images";

function App(props) {
  const allStars = {
    name: 'All Stars',
   logoSrc: "../../assets/images/allStars.png"
  }
  const blazers = {
    name: 'Blazers',
    logoSrc: "../../assets/images/blazers.jpg"
  }
  const comets = {
    name: 'comets ',
    logoSrc: "../../assets/images/comets.jpg"
  }
  const rockets = {
    name: 'rockets',
    logoSrc: "../../assets/images/rockets.jpg"
  }

  return (
    <div className="App">
      <Game
        venue="384 Fairview Place"
        homeTeam={allStars}
        visitingTeam={blazers}
      />
      <Game
        venue="100 Pike Place"
        homeTeam={comets}
        visitingTeam={rockets}
      />
    </div>
  )



}

export default App;
