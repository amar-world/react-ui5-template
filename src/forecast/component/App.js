import React, {Component} from "react";
import "./App.css";
import RootComponent from "./RootComponent";
import AppRouter from "../router/AppRouter";

class App extends Component{

  render(){
    return (
      <div>
        <RootComponent>
          <AppRouter/>
        </RootComponent>
      </div>
    );
  }
}

export default App;
