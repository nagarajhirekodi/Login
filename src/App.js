import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/employeeList" component={EmployeeList} />
      </Switch>
    </Router>
  );
}

export default App;
