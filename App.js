
import './App.css';
import './views/Details'
import './views/PostAd'
import { useState } from 'react';
import Details from './views/Details';
import PostAd from './views/PostAd';

function App() {

  const [screen, setScreen] = useState()

  function updatedscreen(screen){
    setScreen(screen)
  }
  return (
    <div className="App">
      <header className="App-header">
        
    <div>
    <h1>WelCome to Dashboard</h1>
    <img src = "https://media.tenor.com/4lAPj9_cQd0AAAAC/chahat-chahatfateh.gif"/>
    </div>
    
    <div>
    <button onClick = {()=> updatedscreen('Details')}>Details</button>
    <button onClick = {()=> updatedscreen('PostAd')}>PostAd</button>
    </div>
        
        {screen === 'Details' && <Details />}
        {screen === 'PostAd' && <PostAd />}

      </header>
    </div>
  );
}

export default App;
