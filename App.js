import React from "react";
import { Provider } from "react-redux";
import { HomePage } from "./containers/HomePage/Index";
import store from "./Store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserPage } from "./containers/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/user/:userId" exact>
                <UserPage />
            </Route>

            <Route>404 page not found</Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
