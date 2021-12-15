import Home from "./components/Home";
import './components/assets/css/index.css'
import { Provider } from "react-redux";
import { stores } from "./redux/stores";


function App() {
  return (
    <Provider store={stores} >

      <div className="App">
        <Home />
      </div>
    </Provider>

  );
}

export default App;
