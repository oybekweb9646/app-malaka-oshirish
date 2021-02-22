import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Registiratsiya from "./components/Registiratsiya";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>

<Route exact path="/" component={MainPage}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/registr" component={Registiratsiya}/>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
