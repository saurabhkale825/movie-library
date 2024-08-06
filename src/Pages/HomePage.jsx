// HomePage.jsx
import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import "./Pages.css";
import Header from '../Components/Header';

const HomePage = () => {
  return (
    <div >
      <Header />
      <div className='homepage'>
      <SideBar />
      <MovieList />
      </div>
    </div>
  );
};

export default HomePage;

