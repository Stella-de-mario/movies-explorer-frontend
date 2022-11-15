import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import  mainApi from "../../utils/MainApi";
import { authorizerText, editUserText } from "../../utils/constants";

function App() {
  const navigate = useNavigate();
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState("");
  const [isLoginError, setIsLoginError] = useState("");
  const [isSaveMovieError, setIsSaveMovieError] = useState(false);
  const [saveMovies, setSaveMovies] = useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isInfoTooltipTitle, setIsInfoTooltipTitle] = useState("");

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .login({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        setCurrentUser(res);
        navigate.push("/movies");
        setIsLoginError("");
      })
      .catch((err) => {
        setIsLoginError(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setIsRegisterError("");
      })
      .catch((err) => {
        setIsLoginError(err.message);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then((res) => {
        setIsLoggedIn(false);
        setCurrentUser({});
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("movies");
        localStorage.removeItem("searchMovies");
        navigate.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditUser(userData) {
    setIsLoading(true);
    setIsInfoTooltipOpen(true);
    mainApi
      .editUser(userData)
      .then((res) => {
        setIsInfoTooltipTitle(editUserText);
      })
      .catch((err) => {
        setIsInfoTooltipTitle(err.message);
        console.log(err.message);
        if (err.message === authorizerText) {
          handleSignOut();
        }
      })
      .finally(() => setIsLoading(false));
  }

  function handleAddMovies(movie) {
    mainApi
      .addMovies(movie)
      .then((newMovie) => {
        setSaveMovies([newMovie, ...saveMovies]);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === authorizerText) {
          handleSignOut();
        }
      });
  }

  function handleDeleteMovies(movieId) {
    mainApi
      .deleteMovies(movieId)
      .then((movie) => {
        setSaveMovies((prevValue) => {
          return prevValue.filter((i) => i._id !== movie._id);
        });
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === authorizerText) {
          handleSignOut();
        }
      });
  }

  function handleClosePopup() {
    setIsInfoTooltipOpen(false);
  }

  useEffect(() => {
    if (isLoggedIn === true) {
      mainApi
        .getSaveMovies()
        .then((res) => {
          setSaveMovies(res.reverse());
        })
        .catch((err) => {
          setIsSaveMovieError(true);
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((user) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        setCurrentUser({name: user.name, email: user.email});
      })
      .catch((err) => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        console.log(err.message);
      });
  }, [isLoggedIn, navigate]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                isLoggedIn={isLoggedIn}
                saveMovies={setSaveMovies}
                handleAddMovies={handleAddMovies}
                handleDeleteMovies={handleDeleteMovies}
              />
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                isLoggedIn={isLoggedIn}
                saveMovies={saveMovies}
                handleDeleteMovies={handleDeleteMovies}
                isSaveMovieError={isSaveMovieError}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                component={Profile}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                handleEditUser={handleEditUser}
                onSignOut={handleSignOut}
                isInfoTooltipOpen={isInfoTooltipOpen}
                handleClosePopup={handleClosePopup}
                isLoginError={isLoginError}
              />
            }
          />

          <Route
            path="/signup"
            element={
              isLoggedIn ?
              <Navigate to='/' replace /> :
            <Register 
              handleRegister={handleRegister}
              isLoading={isLoading}
              isRegisterError={isRegisterError}
              setIsRegisterError={setIsRegisterError}
            />}
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ?
              <Navigate to='/' replace /> :
            <Login
            handleLogin={handleLogin}
            isLoading={isLoading}
            isLoginError={isLoginError}
            setIsLoginError={setIsLoginError}
             />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <InfoTooltip
        isInfoTooltipTitle={isInfoTooltipTitle}
        isOpen={isInfoTooltipOpen}
        onClose={handleClosePopup}
        />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
