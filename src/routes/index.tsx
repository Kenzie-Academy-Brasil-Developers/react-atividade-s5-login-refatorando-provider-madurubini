import { Route, Switch } from "react-router";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
