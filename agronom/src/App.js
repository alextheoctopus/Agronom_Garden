import { useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
function App() {
  const [popupWindow, setPopupWindow] = useState(false);
  return (

    <div className="App" style={{ width: "2048px", height: "1536px" }}>
      <Header popupWindow={popupWindow} setPopupWindow={setPopupWindow} ></Header>
      <Body popupWindow={popupWindow}></Body>
    </div>
  );
}

export default App;
