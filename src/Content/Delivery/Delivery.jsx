import React from 'react';
import './Delivery.css';
import '../../App.css';
import novaposhtaImg from './NovaPoshta.png';

class Delivery extends React.Component{
  render(){
    return(
      <main className="delivery bg-col">
        <section className="delivery__info main__content">
          <h1 className="delivery__info-title">Доставка</h1>
          <div className="delivery__info-holder">

              <p className="delivery__info-holder-description">
                <img src={novaposhtaImg} alt="novaposhta" className="novaposhta-logo" align="left" vspace="5" hspace="5"/>
                Вы можете получить свой заказ в одном из отделений транспортной компании «Нова пошта».
                Графики работы отделений и адреса Вы найдете на сайте <a href="https://novaposhta.ua" className="delivery-link">novaposhta.ua</a>.
                Стоимость доставки составляет 45 грн.
                Время доставки занимает от 1 до 3 рабочих дней с момента отправки.
              </p>

          </div>
        </section>
      </main>
    );
  }
}

export default Delivery;
