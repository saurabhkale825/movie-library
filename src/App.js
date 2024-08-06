// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import MovieDetail from './Pages/MovieDetails';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/movie/:id"
            element={<PrivateRoute element={<MovieDetail />} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

