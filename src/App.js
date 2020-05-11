import React, { useState } from 'react';
import Game from './component/Game'

function App() {

  const [start, setStart] = useState(false)
  const style = ['btn', start ? 'active' : ' ']

  return (
    <div className="App">
      <button onClick={() => setStart(!start)} className={style.join(' ')}>{!start ? 'Start Game' : 'Stop'}</button>
      {start && <Game endGame={() => setStart(false)} />}
    </div>
  );
}

export default App;
