import logo from './logo.svg';
import './App.css';
import Wellcome from './components/Welcome';
import Hello_world from './components/Hello_world';
import Info from  './components/Info';
import Calculator from './components/Calculator'
import Calculresult from './components/CalculResult';
import React from 'react';

/*import GetClick from './components/pr-zawdannia-01/GetClick';*/
/*import GetClick from './components/pr-zawdannia-02/GetClick';*/
import GetClick from './components/pr-props/pr-zawdannia-03/GetClick';
function App() {
  return (
    <div className="App">
      <GetClick/>
    </div>
  );
}

export default App;
