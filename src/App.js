import logo from './logo.svg';
import './App.css';
import Wellcome from './components/Welcome';
import Hello_world from './components/Hello_world';
/* Info from  './components/Info';*/
import Calculator from './components/Calculator'
import Calculresult from './components/CalculResult';
import React from 'react';

/*import GetClick from './components/pr-zawdannia-01/GetClick';*/
/*import GetClick from './components/pr-zawdannia-02/GetClick';*/
/* GetClick from './components/pr-props/pr-zawdannia-03/GetClick';*/

import Favorite_film from './components/angular/Favorite_film';
import Info from './components/angular/Info';
import Time from './components/angular/Time';
import Animal from './components/angular/Animal'
function App() {
  return (
    <div className="App">
      <Favorite_film/>
      <Info/>
      <Time/>
      <Animal/>
    </div>
  );
}

export default App;
