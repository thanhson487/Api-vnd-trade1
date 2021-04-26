import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import router from "../routers";
import { Provider } from "react-redux";
import configureStore from "../redux/configeStore";
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
   
    <Router>
      <div className="App">
        <Switch>
          {router.map((value, key) => {
            return (
              <Route
                path={value.path}
                exact={value.exact}
                component={value.component}
                key={key}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
   
    </Provider>
  );
}

export default App;
