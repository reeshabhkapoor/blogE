import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Covid from "./Covid";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <BrowserRouter>
      <div className="app">
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route exact path="/" component={Feed} />
                <Route exact path="/covid" component={Covid} />
                <Redirect to="/" />
              </Switch>
              <Widgets />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
