import {Provider} from "react-redux";
import store from "./shared/redux/store";
import CityContainer from "./Cities/CityContainer";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
     <CityContainer/>
    </div>
      </Provider>
  );
}

export default App;
