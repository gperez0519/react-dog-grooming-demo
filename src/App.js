import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Router } from '@reach/router';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

function App() {

  return (
    <>
      <Header />
      <div className="mx-auto">
        <Router primary={false}>
          <HomePage path="/"/>
          <AboutPage path="/about" />
          <ServicePage path="/services" />
        </Router>
      </div>
    </>
  );
}

export default App;
