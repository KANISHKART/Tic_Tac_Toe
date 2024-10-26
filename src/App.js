import "./App.css";

import { useState } from "react";

const template_game_data = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];

function App() {
  const [symbol, setSymbol] = useState("X");

  const [gameData, setGameData] = useState(template_game_data);

  function updateValue(pos) {

    setGameData(gameData.map(val=>{
      if(val.id===pos){
        return {...val, value:symbol}
      }
      else{
        return val;
      }
    }))
    
    if (symbol === "X") {
      setSymbol("O");
    } else if (symbol === "O") {
      setSymbol("X");
    }
  }

  function reset(){
    setGameData(()=>template_game_data);
  }

  return (
    <div className="home">
      <div className="title">
        <h1>TIC TAC TOE</h1>
      </div>

      <div className="game">
        <div className="game-box">
          {gameData.map((x) => (
            <div onClick={()=>updateValue(x.id)} key={x.id}>
              {x.value}
            </div>
          ))}
        </div>
      </div>

      <button className="restart-button" type="submit" onClick={()=>reset()}>
        Restart
      </button>

      <div className="score">
        <table id="high-scores">
          <thead>
            <tr>
              <th>Name</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer</td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
