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

/*import Favorite_film from './components/angular/Favorite_film';
import Info from './components/angular/Info';
import Time from './components/angular/Time';
import Animal from './components/angular/Animal'*/
/*import Res_Info from './components/part-2/Res_info';
import Log_in from './components/part-2/Log_in';*/

import TBook from './components/module6/TBook';
import Newspaper from './components/module7/Newspaper';
function App() {
  return (
    <div className="App">
      <Newspaper
        title="Новини React"
        author="Олександр Петров"
        text="Сьогодні ми розглядаємо створення адаптивного компонента..."
        date="2025-07-29"
        fontStyles={{
          fontFamily: 'Georgia',
          fontSize: '18px',
          color: '#222'
        }}
        backgroundStyles={{
          article: '#f9fafb',
          title: '#e0f7fa',
          image: '#f1f1f1'
        }}
        image="https://via.placeholder.com/300"
        imagePosition="right"
        titleAlign="left"
      />
    </div>
  );
}

export default App;
