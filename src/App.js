//import logo from './logo.svg';
import './App.css';
/*import Wellcome from './components/Welcome';
import Hello_world from './components/Hello_world';
Info from  './components/Info';
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
import CityMain from './components/routerdz/CityMain';
import CityFoto from './components/routerdz/CityFoto';
import CityFotoes from './components/routerdz/CityFotoes';
import ShekspirInfo from './components/routerdz/ShekspirInfo';
import ShekPjesy from './components/routerdz/ShekPjesy';
import Globus from './components/routerdz/Globus';


/*import DaVinchiBio from './components/router/DaVinchiBio';
import DaVinchiFamArt1 from './components/router/DaVinchiFamArt1';
import DaVinchiFamArts from './components/router/DaVinchiFamArts';
import Artimid from './components/router/Artemid';
import Galik from './components/router/Galik';
import Gizi from './components/router/Gizi.js';
import Kolos from './components/router/Kolos.js';
import Majak from './components/router/Majak';
import Semeramid from './components/router/Semeramid';
import Zeus from './components/router/Zeus.js';*/

//import Notepad from './components/module12/Notepad';

function App() {
  return (<>
  <h1 class='city'>About my city:</h1>
  <ul>
    <li><a href='/components/routerdz/CityMain'> About city </a> </li>
    <li><a href='/components/routerdz/CityFoto'> the best attraction </a> </li>
    <li><a href='/components/routerdz/CityFotoes'> other sights </a> </li>
  </ul>
  <h1 class='city'>Shekspir:</h1>
  <ul>
    <li><a href='/components/routerdz/ShekspirInfo'> Shekspir Info</a> </li>
    <li><a href='/components/routerdz/ShekPjesy'> Shekspir plays</a> </li>
    <li><a href='/components/routerdz/Globus'> Globus</a> </li>
  </ul>
    <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/CityMain' element={<CityMain/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/CityFoto' element={<CityFoto/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/CityFotoes' element={<CityFotoes/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/ShekspirInfo' element={<ShekspirInfo/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/ShekPjesy' element={<ShekPjesy/>}/>
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='/components/routerdz/Globus' element={<Globus/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
