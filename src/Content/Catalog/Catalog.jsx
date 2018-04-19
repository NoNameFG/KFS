import React from 'react';
import './Catalog.css';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {catalogSelect} from '../../Store/Actions/CatalogSelect';
import {bindActionCreators} from 'redux';

class Catalog extends React.Component{
  state = {
    name: 'item__info-holder-swipe',
    sizeChange: true,
    routeState: false
  }

  resize = () => {
    if(+window.getComputedStyle(document.querySelector('body')).width.replace('px', '')<=765 && this.state.sizeChange){
      this.setState({
        name: 'item__info-holder-swipe reduce__animation',
        sizeChange: false
      });
    }else if(+window.getComputedStyle(document.querySelector('body')).width.replace('px', '')>765 && !this.state.sizeChange){
      this.setState({
        name: 'item__info-holder-swipe',
        sizeChange: true
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  showList(){
    return this.props.catalog.map(element => {
      return(
        <li key={element.id} className="catalog__list-item">
          <div className="catalog__list-item-holder">
            <div className="item__image" style={{backgroundImage: `url(${require('' + element.images[0])}`}}></div>
            <div className="item__info">
              <div className="item__info-holder">
                <div className={this.state.name}>
                  <h3 className="item__info-name">{element.name}</h3>
                  <p className="item__info-price">{element.price.replace('грн', '₴')}</p>
                  <NavLink
                    to="/item"
                    className="item__info-button"
                    onClick={() => {
                      this.props.catalogSelect(element);
                    }}
                    >
                    Подробнее
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    })
  }

  render(){
    return(
      <main className="catalog main__content">
        <ul className="catalog__list">
          {this.showList()}
        </ul>
      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    catalog: state.catalog,
    activeItem: state.activeItem,
    menuStatus: state.menuStatus
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    catalogSelect: catalogSelect
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Catalog));
