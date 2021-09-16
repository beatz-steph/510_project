import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// routes
import { APP_ROUTES } from "./data";

// pages
import { SearchPage, AboutPage, ResultPage } from "./pages";

function App() {
  return (
    <div>
      <Switch>
        <Route path={APP_ROUTES.search} exact>
          <SearchPage />
        </Route>
        <Route path={APP_ROUTES.result} exact>
          <ResultPage />
        </Route>
        <Route path={APP_ROUTES.about}>
          <AboutPage />
        </Route>

        {/* default redirect */}
        <Redirect to={APP_ROUTES.search} />
      </Switch>
    </div>
  );
}

export default App;
