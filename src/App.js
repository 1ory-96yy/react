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

/*import TBook from './components/module6/TBook';
import Newspaper from './components/module7/Newspaper';*/

//module-7
import Clock from './components/clock/Clock';
//module-8
import MultiplicationTable from './components/module8/MultiplicationTable';
import CompanyEmployees from './components/module8/CompanyEmployees';
import RestaurantMenu from './components/module8/RestaurantMenu';
import UniversityFaculty from './components/module8/UniversityFaculty';
//module-8(dz)
import BlogPost from './components/module-8(dz)/BlogPost';
import CitiesInfo from './components/module-8(dz)/CitiesInfo';
import MovieSchedule from './components/module-8(dz)/MovieSchedule';

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Мій Годинник</h1>
      <Clock
        showDate={true}
        backgroundColors={{
          morning: "#FFE066",
          day: "#AEE1F9",
          night: "#333333",  
        }}
        fontSettings={{
          fontFamily: "Courier New",
          fontSize: "30px",
          color: "#ffffff",
        }}
        />
      
      <h1>Модуль 8 – Завдання</h1>

      <MultiplicationTable rows={5} cols={5} />

      <CompanyEmployees
        company={{ name: "Tech Corp", location: "Kyiv" }}
        employees={[
          { id: 1, name: "Ivan Petrenko", position: "Developer" },
          { id: 2, name: "Olga Shevchenko", position: "Designer" },
          { id: 3, name: "Taras Bondarenko", position: "Manager" },
        ]}
      />

      <UniversityFaculty
        faculty={{
          name: "Faculty of Computer Science",
          dean: "Dr. Natalia Ivanova",
          groups: [
            { name: "CS-101", students: ["Andriy", "Iryna", "Bohdan"] },
            { name: "CS-102", students: ["Oksana", "Volodymyr"] }
          ]
        }}
      />

      <RestaurantMenu
        menu={[
          {
            category: "Salads",
            dishes: [
              { name: "Greek Salad", ingredients: ["Tomato", "Cucumber", "Feta"] },
              { name: "Caesar", ingredients: ["Chicken", "Parmesan", "Lettuce"] }
            ]
          },
          {
            category: "Soups",
            dishes: [
              { name: "Borscht", ingredients: ["Beetroot", "Cabbage", "Meat"] }
            ]
          }
        ]}
      />




        <h1>Домашнє завдання</h1>
      <MovieSchedule movies={[{
      title: "Inception",
      description: "A mind-bending thriller about dreams within dreams.",
      poster: "https://via.placeholder.com/200x300?text=Inception",
      sessions: ["12:00", "15:30", "18:00", "21:00"]
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole to find a new home for humanity.",
      poster: "https://via.placeholder.com/200x300?text=Interstellar",
      sessions: ["10:00", "13:00", "16:30", "20:00"]
    },
    {
      title: "The Matrix",
      description: "A hacker discovers the world is a simulation.",
      poster: "https://via.placeholder.com/200x300?text=The+Matrix",
      sessions: ["11:00", "14:00", "17:00", "20:30"]
    }
    ]} />


      <BlogPost posts={[{
      title: "Що нового в React 18?",
      text: "React 18 представив автоматичну пакетну обробку, Suspense і нові можливості рендерингу.",
      date: "2025-07-20",
      tags: ["React", "JavaScript", "Новини"]
    },
    {
      title: "10 порад для ефективного CSS",
      text: "Добре структурований CSS робить ваш код чистішим і легшим для підтримки.",
      date: "2025-07-18",
      tags: ["CSS", "Фронтенд", "UI"]
    },
    {
      title: "TypeScript для початківців",
      text: "TypeScript допомагає уникати помилок ще до запуску програми.",
      date: "2025-07-15",
      tags: ["TypeScript", "JavaScript", "Frontend"]
    }
    ]} />

      <CitiesInfo country="Україна" cities={[{
      name: "Київ",
      description: "Київ — столиця України, культурний і політичний центр країни.",
      coat: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Coat_of_Arms_of_Kyiv_Kurovskyi.svg/200px-Coat_of_Arms_of_Kyiv_Kurovskyi.svg.png",
      population: "2.9 млн",
      area: 839
    },
    {
      name: "Львів",
      description: "Львів — історичне місто на заході України з унікальною архітектурою.",
      coat: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Lviv_coa_UKR.svg/200px-Lviv_coa_UKR.svg.png",
      population: "720 тис.",
      area: 182
    },
    {
      name: "Одеса",
      description: "Одеса — морський порт і курортне місто на півдні України.",
      coat: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Odessa_coat_of_arms.svg/200px-Odessa_coat_of_arms.svg.png",
      population: "1 млн",
      area: 236
    }
    ]} />
    
    </div>
  );
}

export default App;
