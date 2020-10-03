import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from "./components/Layout";
import { Main } from "./pages/MainPage";
import { Contacts } from "./pages/Contants";
import { AboutUs } from "./pages/AboutUs";


function App() {
  return (
    <div className="App container">
      <header>
        <NavBar />
      </header>
      <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contacts' component={Contacts} />
      </Switch>
    </div>
  );
}

export default App;
