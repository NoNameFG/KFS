import React from 'react';
import './Hamburger.css';
import '../Menu.jsx'
import {connect} from 'react-redux';

class Hamburger extends React.Component{
  state = {
    arrayClass: [
      'hamburger__controller-topline',
      'hamburger__controller-bottomline']
  }

  componentWillReceiveProps(e){
    var hamCh = this.state.arrayClass;
    if(this.props.menuStatus.Status) hamCh = hamCh.map(e => e+='-active');
    else hamCh = hamCh.map(e => e.replace('-active', ''));
    this.setState({
      arrayClass: hamCh
    });
  }

  handleClick = event => {
    var hamCh = this.state.arrayClass;
    if(!this.props.menuStatus.Status) hamCh = hamCh.map(e => e+='-active');
    else hamCh = hamCh.map(e => e.replace('-active', ''));
    this.props.menuStatus.Status = !this.props.menuStatus.Status;
    this.props.updateData(this.props.menuStatus.Status);
    this.setState({
      arrayClass: hamCh
    });
  }

  render(){
    return(
      <div className='hamburger__controller' onClick={this.handleClick}>
        <span className={this.state.arrayClass[0]}></span>
        <span className={this.state.arrayClass[1]}></span>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
    menuStatus: state.menuStatus
  };
}

export default connect(mapStateToProps)(Hamburger);
