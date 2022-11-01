import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
        <Routes>
          <Route exact path="/"
          element={ 
                <Main isLoggedIn={isLoggedIn}/> 
              } />
          <Route path="/movies" element={<Movies />}
           />
          <Route exact path="/saved-movies"  element={<SavedMovies />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
