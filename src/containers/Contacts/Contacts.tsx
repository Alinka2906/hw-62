import React from 'react';
import './Contacts.css';

const Contacts = () => {
  const buildUrl = 'https://i2.photo.2gis.com/images/branch/0/30258560072025919_6afa.jpg';

  return (
    <div className="contacts">
      <div className="cont-text">
        <h4>Юридический адресс:</h4>
        <p>Ленинский район</p>
        <p>г.Бищкек</p>
        <p>ул Бакаева 180/4</p>
        <h4>Контакты:</h4>
        <p>Канцелярия: 0312 - 597742</p>
      </div>
      <div className="cont-text box">
        <img src={buildUrl}/>
      </div>
    </div>
  );
};

export default Contacts;