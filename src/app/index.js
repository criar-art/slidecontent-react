import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import './style.scss';

import AppHeader from '../components/base/AppHeader';
import AppFooter from '../components/base/AppFooter';

import Home from '../views/Home';
import About from '../views/About';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main data-testid="app-main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        </main>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
