import React from 'react';
import './Contacts.css';
import '../../App.css';
import { compose } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 49.760395, lng: 31.415460 }}
  >
    <Marker
      position={{ lat: 49.760395, lng: 31.415460 }}
    />
  </GoogleMap>
);

class Contacts extends React.Component{
  render(){
    return(
      <main className="contacts bg-col">
        <section className="contacts__info main__content">
          <h1 className="contacts__info-title">Контакты</h1>
          <div className="contacts__info-holder">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfJIaIh5ule5t-P2uIGh-qksKStzjzP0E&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div className="google__map"/>}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div className="contacts__info-section">
              <p className="contacts__info-number">
                Телефон/Viber:  <a href="tel:+380674358804" className="contacts__number">+380674358804</a>
              </p>
              <p className="contacts__info-mail">
                Почта:  <a href="mailto:kaniv.flower.studio@gmail.com" className="contacts__mail">kaniv.flower.studio@gmail.com</a>
              </p>
              <p className="contacts__info-instagram">
                Instagram:  <a href="https://www.instagram.com/kaniv_flower_studio/" className="contacts__instagram">@kaniv_flower_studio</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Contacts;
