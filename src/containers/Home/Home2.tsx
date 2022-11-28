import React from 'react';
import "./Home.css";


const Home: React.FC = () => {
  const info = [
    {
      name: `ОсОО "Вертекс Голд Компани"`,
      image: 'https://st-1.akipress.org/st_gallery/25/1440125.0f91464078c8bd5f17d202629891eef4.500.jpg'
    },
    {
      name: `ОсОО "Беш-Арча"`,
      image: 'https://diesel.elcat.kg/uploads/monthly_03_2022/post-15-0-49321500-1646831077.jpg'
    },
    {
      name: `ОсОО "Глобал Ширальджин Майнинг"`,
      image: 'https://rivs.ru/Media/Default/New/2018/20%20%D0%BC%D0%B0%D1%80%D1%82%D0%B0%202018.jpg'
    },
    {name: `ОсОО "Туран Металз"`, image: 'https://s.drom.ru/i24205/pubs/4483/50102/2533482.jpg'},
  ]
  return (
    <div className="structure">
      <div className="title">
        <h3>В состав холдинга входят: </h3>
      </div>
      <div className="block">
      {info.map((item) => (

        <div className="info">
         <p className="text"> {item.name}</p>
          <img src={item.image}/>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;