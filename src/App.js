import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from './data/folderData';

function App() {

  const [explorerData, setExplorerData] = useState(explorer);

  console.log(explorerData);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
