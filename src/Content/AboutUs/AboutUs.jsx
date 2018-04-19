import React from 'react';
import './AboutUs.css';
import '../../App.css';

class AboutUs extends React.Component{
  render(){
    return(
      <main className="aboutUs bg-col">
        <section className="aboutUs__info main__content">
          <h1 className="aboutUs__info-title">О нас</h1>
          <p className="aboutUs__info-description">
            Вам нужен подарок, который очарует своей красотой?
            Или надоели цветы, которые вянут, не позволив насладиться своей
            привлекательностью? Тогда магазин "Kaniv flower studio" создан специально для Вас.
            Мы предлагаем цветы ручной работы, которые будут очаровательным дополнением к вашему интерьеру.
            Качественное и быстрое выполнение работы. Большой выбор
            цветовой гаммы и разнообразие видов. Яркие и не прихотливые цветы
            будут радовать своей красотой долгие годы.
          </p>
          <a href="tel: +380674358804" className="phone-number">+380674358804</a>
        </section>
      </main>
    );
  }
}

export default AboutUs;
