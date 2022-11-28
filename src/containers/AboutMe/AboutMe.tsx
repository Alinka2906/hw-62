import React from 'react';
import './AboutMe.css';
import Stepnogorsk from './Stepnogorsk.jpeg';

const AboutMe = () => {
  const myUrl = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRNwUmL67VVo8-3HblCPnUnw';
  const stepUrl = Stepnogorsk;
  const newYear = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRM8HdlP5TmDyYNPveYUVIeg';
  const shahta = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR6ePbIxKAlvnrpiPt57MAAw';
  const nY = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRsht3JICwWp63ILapDNqcUA';
  const nY2 = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRVMGd5XDbULnwoPJXWAKNcA';
  const mosc2 = 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRw8qxnUzDqVrQwcIFd_uAFw';
  return (
    <div className="my">
      <div className="myBlock">
        <div className="picture"><img src={myUrl}/></div>
        <div className="myText">
          <h4>ФИО:</h4>
          <p className="myInfo"> Фоменко Алия Валерьевна </p>
          <h4>Образование:</h4>
          <p className="myInfo">Высшее</p>
          <p className="myInfo"> 2004 - Международный Университет Кыргызстана (юриспруденция) </p>
          <p className="myInfo"> 2022 - Кыргызский Горный Государственный Университет (экономика горного дела) </p>
          <h4>Должность:</h4>
          <p className="myInfo"> Начальник отдела труда и заработной платы</p>
          <h4>Стаж работы в компании:</h4>
          <p className="myInfo"> 10 лет</p>
          <h4>Обязанности:</h4>
          <p className="myInfo">Планировование бюджета фонда оплаты труда на Группу Компаний, пронозирование расходов по оплате труда,
            аналитика производственных показателей, разработка и составление локально-нормативных актов.
            Разработка и составление штатного расписаний Компаний, контроль своевременности и достоверности начислений
            заработной платы.
          </p>
        </div>
      </div>
      <div className="our">
        <h4>Наши будни и праздники:</h4>
        <div className="item">
          <div className="item-pic"><img className="pic" src={stepUrl}/></div>
          <div className="item-pic"><img className="pic"src={newYear}/></div>
          <div className="item-pic"><img className="pic"src={shahta}/></div>
          <div className="item-pic"><img className="pic"src={nY}/></div>
          <div className="item-pic"><img className="pic"src={nY2}/></div>
          <div className="item-pic"><img className="pic"src={mosc2}/></div>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;