import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import reportWebVitals from './reportWebVitals';
import Results from './components/Results/Results';

const myapp = (
    <React.StrictMode>
        <div className = "display">
          <Header />
          <Container />
        </div>
        <div>
          <Results />
          </div>
      </React.StrictMode>
);

ReactDOM.render(myapp, document.getElementById('main'));

