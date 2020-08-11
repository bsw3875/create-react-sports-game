import React from 'react';
import "./App.css";
import Game from "./components/game/Game";
import allStarsLogo from "./assets/images/allStars.png";
import blazersLogo from "./assets/images/blazers.jpg"
import cometsLogo from "./assets/images/comets.jpg"
import rocketsLogo from "./assets/images/rockets.jpg"



function App(props) {
  const allStars = {
    name: 'All Stars',
   logoSrc: allStarsLogo
  }
  const blazers = {
    name: 'Blazers',
    logoSrc: blazersLogo
  }
  const comets = {
    name: 'comets ',
    logoSrc: cometsLogo
  }
  const rockets = {
    name: 'rockets',
    logoSrc: rocketsLogo
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
