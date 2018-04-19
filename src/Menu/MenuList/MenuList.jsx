import React from 'react';
import './MenuList.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class MenuList extends React.Component{
  state = {
    flag: false,
    classN: 'navigation'
  }


  componentWillReceiveProps(e){
    var nameCh = this.state.classN;
    if(this.state.flag) nameCh = nameCh.replace(' navigation-active', '');
    else nameCh += ' navigation-active';
    this.setState({
      classN: nameCh,
      flag: e.updateData
    });
  }

  handleClick = event => {
    this.props.menuStatus.Status = !this.props.menuStatus.Status;
    this.props.callBackData(this.props.menuStatus.Status);
  }

  render(){
    return(
      <nav className={this.state.classN} style={{heigh: this.navList && this.navList.offsetHeight + window.getComputedStyle(this.navList).marginTop + window.getComputedStyle(this.navList).marginBottom}}>
        <ul ref={node => this.navList = node} className="navigation__list">
          <li className="navigation__list--element" onClick={this.handleClick}>
            <NavLink exact to="/" className="nav__element--main navigation__list--element-link" activeClassName="navigation__list--element--active">
              Главная
            </NavLink>
          </li>
          <li className="navigation__list--element" onClick={this.handleClick}>
            <NavLink to="/catalog" className="nav__element--catalog navigation__list--element-link" activeClassName="navigation__list--element--active">
              Каталог
            </NavLink>
          </li>
          <li className="navigation__list--element" onClick={this.handleClick}>
            <NavLink to="/aboutus" className="nav__element--about navigation__list--element-link" activeClassName="navigation__list--element--active">
              О нас
            </NavLink>
          </li>
          <li className="navigation__list--element" onClick={this.handleClick}>
            <NavLink to="/delivery" className="nav__element--delivery navigation__list--element-link" activeClassName="navigation__list--element--active">
              Доставка
            </NavLink>
          </li>
          <li className="navigation__list--element" onClick={this.handleClick}>
            <NavLink to="/contacts" className="nav__element--contacts navigation__list--element-link" activeClassName="navigation__list--element--active">
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps (state){
  return {
    menuStatus: state.menuStatus
  };
}

export default withRouter(connect(mapStateToProps)(MenuList));
