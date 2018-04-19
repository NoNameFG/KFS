import React from 'react';
import './Menu.css';
import Logo from './Logo/Logo';
import Networks from './Networks/Networks';
import MenuList from './MenuList/MenuList';
import Hamburger from './Hamburger/Hamburger';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Menu extends React.Component {
  state = {
    name: 'main__section main__section-disabled main__section-st',
    flag: false,
    sizeChange: true
  }

  resize = () => {
    if(+window.getComputedStyle(document.querySelector('body')).width.replace('px', '')>765 && this.props.menuStatus.Status  && this.state.sizeChange){
      this.props.menuStatus.Status = false;
      this.setState({
        name: 'main__section main__section-disabled main__section-st',
        sizeChange: false
      });
    }
    if(+window.getComputedStyle(document.querySelector('body')).width.replace('px', '')>765 && this.state.sizeChange){
      this.props.menuStatus.Status = false;
      this.setState({
        name: 'main__section main__section-disabled main__section-st',
        sizeChange: false
      });
    }
    this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  updateData = (value) => {
    var nameCh = this.state.name;
    if (nameCh.indexOf(' main__section-st') !== -1) nameCh = nameCh.replace(' main__section-st', ' main__section-cl');
    if(!value) nameCh+=' main__section-disabled';
    else nameCh = nameCh.replace(' main__section-disabled', '');
    this.setState({
       name: nameCh,
       flag: value,
       sizeChange: true
     });
  }

  render() {
    return (
      <section className={this.state.name}>
        <Hamburger updateData={this.updateData} newData={this.props.menuStatus.Status}/>
        <Logo/>
        <MenuList updateData={this.state.flag} callBackData={this.updateData}/>
        <Networks updateData={this.state.flag}/>
      </section>
    );
  }
}

function mapStateToProps (state){
  return {
    menuStatus: state.menuStatus
  };
}

export default withRouter(connect(mapStateToProps)(Menu));
