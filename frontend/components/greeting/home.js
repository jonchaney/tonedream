import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from '../search_bar/search_container';

const backgroundImage = (login, user) => (
  <div>
    <div className="background-image">
      
    </div>
     <p className="main-tagline">find new music, support independent artists -- sign up to join</p> 
  </div>
);

const Home = () => (
  backgroundImage()
);

export default Home;