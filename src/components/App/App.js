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
import  MainApi from "../../utils/MainApi";
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipTitle, setIsInfoTooltipTitle] = useState("");

  function handleLogin({ email, password }) {
    setIsLoading(true);
    MainApi
      .login({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", true);
        setCurrentUser(res);
        navigate("/movies");
        setIsLoginError("");
      })
      .catch((err) => {
        setIsLoginError(err.message);
        setIsSuccess(false);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    MainApi
      .register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setIsRegisterError("");
      })
      .catch((err) => {
        setIsRegisterError(err.message);
        setIsSuccess(false);
        console.log(err.message);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    MainApi
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear();
        navigate("/");
        setCurrentUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditUser({ name, email }) {
    setIsLoading(true);
    setIsInfoTooltipOpen(true);
    MainApi
      .editUser({ name, email })
      .then((res) => {
        setCurrentUser(res);
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

  function handleAddMovies(movieCard) {
    MainApi
      .addMovies(movieCard)
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
    MainApi
      .deleteMovies(movieId)
      .then((movie) => {
        setSaveMovies((prevValue) => {
          return prevValue.filter((item) => item._id !== movie._id);
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
      MainApi
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
    MainApi
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
          <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />

          <Route
            path="/movies/*"
            element={
              <ProtectedRoute
                component={Movies}
                isLoggedIn={isLoggedIn}
                saveMovies={saveMovies}
                handleAddMovies={handleAddMovies}
                handleDeleteMovies={handleDeleteMovies}
              />
            }
          />
          <Route
            path="/saved-movies/*"
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
            path="/profile/*"
            element={
              <ProtectedRoute
                component={Profile}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                handleEditUser={handleEditUser}
                onSignOut={handleSignOut}
              />
            }
          />

          <Route
            path="/signup"
            element={
              isLoggedIn ?
              <Navigate to='/movies' />
              : <Register 
              onRegister={handleRegister}
              isLoading={isLoading}
              isRegisterError={isRegisterError}
              setIsRegisterError={setIsRegisterError}
            />
            }
          />
          <Route
            path="/signin"
            element={
              isLoggedIn ?
              <Navigate to='/movies' />
              : <Login
                onLogin={handleLogin}
                isLoading={isLoading}
                isLoginError={isLoginError}
                setIsLoginError={setIsLoginError}
                 />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <InfoTooltip
        isInfoTooltipTitle={isInfoTooltipTitle}
        isOpen={isInfoTooltipOpen}
        onClose={handleClosePopup}
        isSuccess={isSuccess}
        />
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;