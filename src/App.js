import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Catalog from './Content/Catalog/Catalog';
import ItemDescription from './Content/Catalog/ItemDescription/ItemDescription';
import AboutUs from './Content/AboutUs/AboutUs';
import Delivery from './Content/Delivery/Delivery';
import Contacts from './Content/Contacts/Contacts';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <main className="main">
        <Menu/>

        <Switch>
          <Route exact path="/" render={ () => (
            <main className="main__page">
              <h1 className="main__page-title">
                Kaniv<span className="main__page-title-dott">.</span>Flower<span className="main__page-title-dott">.</span>Studio
              </h1>
            </main>
          )}/>
          <Route path="/catalog" component={Catalog}/>
          <Route path="/item" component={ItemDescription}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/delivery" component={Delivery}/>
          <Route path="/contacts" component={Contacts}/>
        </Switch>

      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    activeItem: state.activeItem
  }
}

export default withRouter(connect(mapStateToProps)(App));
