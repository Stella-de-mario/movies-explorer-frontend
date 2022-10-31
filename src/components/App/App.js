import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({});

  function handleAuthorizer() {
    setIsLoggedIn(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile" ? (
          <Header isLoggedIn={isLoggedIn} onSignUp={handleAuthorizer} />
        ) : (
          ""
        )}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {pathname === "/" ||
        pathname === "/movies" ||
        pathname === "/saved-movies" ? (
          <Footer />
        ) : (
          " "
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
