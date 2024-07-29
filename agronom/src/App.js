import { useState } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { store } from "./store/store";
import Body from './components/body/Body';
import Header from './components/header/Header';
function AppRedux() {
  const [popupWindow, setPopupWindow] = useState(false);
  return (

    <div className="App" style={{ width: "2048px", height: "1536px" }}>
      <Header popupWindow={popupWindow} setPopupWindow={setPopupWindow} ></Header>
      <Body popupWindow={popupWindow} setPopupWindow={setPopupWindow}></Body>
    </div>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <AppRedux></AppRedux>
    </Provider>
  );
}

export default App