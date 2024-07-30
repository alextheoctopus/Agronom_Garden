import { useState } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { store } from "./store/store";
import Body from './components/body/Body';
import Header from './components/header/Header';

function AppRedux() {
  const [popupWindow, setPopupWindow] = useState('');
  const [valueName, setValueName] = useState('');
  const [valueCompany, setValueCompany] = useState('');
  
  return (
    <div className="App" style={{ width: "2048px", height: "1536px"}}>
      <Header valueName={valueName} valueCompany={valueCompany} setValueName={setValueName} setValueCompany={setValueCompany} popupWindow={popupWindow} setPopupWindow={setPopupWindow} ></Header>
      <Body valueName={valueName} valueCompany={valueCompany} popupWindow={popupWindow} setPopupWindow={setPopupWindow}></Body>
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