import React, { Component } from 'react'
//React-router-dom
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
//redux
import store from "./redux/store";
import { Provider } from "react-redux";
//scss & bootstrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./styles/app.scss";
//components 
import Home from "./components/Home/HomeIndex";
import Fishes from "./components/Fishes/FishesIndex";
import Plants from "./components/Plants/PlantsIndex";
import Water from "./components/Water/WaterIndex";
import Air from "./components/Air/AirIndex";

class App extends Component {
    render() { 
        return ( 
            <Provider store={store}>
            <HashRouter>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/fishes" component={Fishes} />
                <Route path="/plants" component={Plants} />
                <Route path="/water" component={Water} />
                <Route path="/air" component={Air} />
        
                <Redirect path="/" to="/home" />
              </Switch>
            </HashRouter>
          </Provider>
         );
    }
}
 
export default App;