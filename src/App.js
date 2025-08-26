//import logo from './logo.svg';
import './App.css';
import Wellcome from './components/Welcome';
import Hello_world from './components/Hello_world';
/*Info from  './components/Info';
import Calculator from './components/Calculator'
import Calculresult from './components/CalculResult';
import React from 'react';*/

/*import GetClick from './components/pr-zawdannia-01/GetClick';*/
/*import GetClick from './components/pr-zawdannia-02/GetClick';*/
/* GetClick from './components/pr-props/pr-zawdannia-03/GetClick';*/

/*import Favorite_film from './components/angular/Favorite_film';
import Info from './components/angular/Info';
import Time from './components/angular/Time';
import Animal from './components/angular/Animal'*/
/*import Res_Info from './components/part-2/Res_info';
import Log_in from './components/part-2/Log_in';*/

/*import TBook from './components/module6/TBook';
import Newspaper from './components/module7/Newspaper';*/

//module-7
/*import Clock from './components/clock/Clock';
//module-8
import MultiplicationTable from './components/module8/MultiplicationTable';
import CompanyEmployees from './components/module8/CompanyEmployees';
import RestaurantMenu from './components/module8/RestaurantMenu';
import UniversityFaculty from './components/module8/UniversityFaculty';
//module-8(dz)
import BlogPost from './components/module-8(dz)/BlogPost';
import CitiesInfo from './components/module-8(dz)/CitiesInfo';
import MovieSchedule from './components/module-8(dz)/MovieSchedule';*/

/*import NewUserList from './components/pr-para/NewUserList';*/
//import Jsonpr from './components/pr2-para/Jsonpr';

/*import TrainersApp from './components/module9(lad)/TrainersApp';
import LibraryApp from './components/module9(dz)/LibraryApp';*/

//import NewUserList from './components/pr2-para/NewUserList';
//import CatInfo from './components/module10/CatInfo';
//import Yoda from './components/module10/Yoda';

//import Weather from './components/module10/Weather';

import {BrowserRouter, Route, Routes } from 'react-router-dom';
import DaVinchiBio from './components/router/DaVinchiBio';
import DaVinchiFamArt1 from './components/router/DaVinchiFamArt1';
import DaVinchiFamArts from './components/router/DaVinchiFamArts';
import Artimid from './components/router/Artemid';
import Galik from './components/router/Galik';
import Gizi from './components/router/Gizi.js';
import Kolos from './components/router/Kolos.js';
import Majak from './components/router/Majak';
import Semeramid from './components/router/Semeramid';
import Zeus from './components/router/Zeus.js';
function App() {
  return (<>
      <h1 class='da'>Da-Vinci:</h1>
      <ul class='daInfo'>
        <li>
          <a href='/components/router/DaVinchiBio'>Bio</a>
        </li>
        <li>
          <a href='/components/router/DaVinchiFamArt1'>famous art</a>
        </li>
         <li>
          <a href='/components/router/DaVinchiFamArts'>famous arts</a>
        </li>
      </ul>
      <h1 class='seven'>Сім чудес Стародавнього світу:</h1>
      <ul class='sevenInfo'>
        <li>
          <a href='/components/router/Artemid'>Храм Артеміди в Ефесі</a>
        </li>
        <li>
          <a href='/components/router/Galik'>Мавзолей у Галікарнасі</a>
        </li>
        <li>
          <a href='/components/router/Gizi'>Піраміди в Гізі</a>
        </li>
        <li>
          <a href='/components/router/Kolos'>Колос Родоський</a>
        </li>
        <li>
          <a href='/components/router/Majak'>Александрійський маяк</a>
        </li>
        <li>
          <a href='/components/router/Semeramid'>Висячі сади Семіраміди</a>
        </li>
        <li>
          <a href='/components/router/Zeus'>Статуя Зевса в Олімпії</a>
        </li>
      </ul>
      
      <BrowserRouter>
        <Routes>
          <Route path='/components/Hello_world' element={<Hello_world></Hello_world>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/DaVinchiBio' element={<DaVinchiBio/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/DaVinchiFamArt1' element={<DaVinchiFamArt1/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/DaVinchiFamArts' element={<DaVinchiFamArts/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Artemid' element={<Artimid/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Galik' element={<Galik/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Gizi' element={<Gizi/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Kolos' element={<Kolos/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Majak' element={<Majak/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Semeramid' element={<Semeramid/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/router/Zeus' element={<Zeus/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
