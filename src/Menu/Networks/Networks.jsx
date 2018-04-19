import React from 'react';
import './Networks.css';
import VK from './vkicon.png';
import instagram from './instagramicon.png';
import {connect} from 'react-redux';

class Networks extends React.Component{
  state = {
    classN: 'social-networks social-networks__closed',
    flag: false
  }

  componentWillReceiveProps(e){
    var nameCh = this.state.classN;
    if(e.updateData) nameCh = nameCh.replace(/ social-networks__closed/g, '');
    else nameCh += ' social-networks__closed';
    this.setState({
      classN: nameCh,
      flag: e.updateData
    });
  }

  render(){
    return(
      <div className={this.state.classN}>
        <div className="social-networks__element social-networks__element--vk">
          <a href="" className="social-networks__link">
            <img src={VK} alt="vk" className="social-networks__logo"/>
          </a>
        </div>
        <div className="social-networks__element social-networks__element--instagram">
          <a href="https://www.instagram.com/kaniv_flower_studio/" className="social-networks__link">
            <img src={instagram} alt="instagram" className="social-networks__logo"/>
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return({
    menuStatus: state.menuStatus
  });
}

export default connect(mapStateToProps)(Networks);
