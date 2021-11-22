import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// routes
import { APP_ROUTES } from "./data";

// pages
import { SearchPage, AboutPage, ResultPage } from "./pages";

// context
import AppContext from "./context";

function App() {
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <ToastContainer />
      <AppContext.Provider
        value={{ animal, setAnimal, loading, setLoading, error, setError }}
      >
        <Switch>
          <Route path={APP_ROUTES.search} exact>
            <SearchPage animal={animal} />
          </Route>
          <Route path={APP_ROUTES.result} exact>
            <ResultPage animal={animal} loading={loading} />
          </Route>
          <Route path={APP_ROUTES.about}>
            <AboutPage />
          </Route>

          {/* default redirect */}
          <Redirect to={APP_ROUTES.search} />
        </Switch>
      </AppContext.Provider>
    </div>
  );
}

export default App;
