import React from 'react';
import Header from '../components/Header';
import Container from '../components/Container';
import Results from '../components/Results';

const Home = () => (
  <div className = "Home">
    <div className = "main-content">
      <Header />
      <Container />
    </div>
    <div className = "results-content">
      <Results />
    </div> 
  </div>
);


export default Home;