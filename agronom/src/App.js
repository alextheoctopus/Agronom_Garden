import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
function App() {
  const [popupWindow, setPopupWindow] = useState(false);

  return (

    <div className="App">
      <AppContext.Provider values={{ popupWindow, setPopupWindow }} />
      <Header></Header>
      <Body></Body>
      <AppContext.Provider />
    </div>
  );
}

export default App;
