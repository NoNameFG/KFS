import React from 'react';
import {connect} from 'react-redux';
import './ItemDescription.css';
import '../../../App.css';

class ItemDescription extends React.Component{
  state = {
    position: 0
  }

  showAlbum(switcher){
    switch (switcher) {
      case 'main__holder':
          return this.props.activeItem.images.map((element, index) => {
              return(
                <div
                  className={`image__holder-${index+1} image__holder`}
                  key={`main__holder-${index+1}`}
                  style={{
                    backgroundImage: `url(${require('' + element.replace('/ItemDescription', ''))})`
                  }}>
                </div>
              );
          });
      case 'main__control':
          return this.props.activeItem.images.map((element, index) => {
              return(
                <div
                  className={`item__main-album-control-${index+1} item__main-album-control`}
                  key={`main__control-${index+1}`}
                  onClick={ e =>{
                      this.setState({
                        position: -100*(+e.target.classList[0].replace('item__main-album-control-', '') - 1),
                        flagActive: false
                      });
                    }
                  }
                  style={{backgroundImage: `url(${require('' + element.replace('/ItemDescription', ''))})`}}>
                </div>
              );
          });
      default:
        return null;
    }
  }

  render(){
    return(
      <main className="item__description main__content">
        <section className="item__main">
          <div className="item__main-about">
            <div className="item__main-image">
              <div className="item__main-image-swipe" style={{
                left: `${this.state.position}%`
              }}>
                {this.showAlbum('main__holder')}
              </div>
            </div>
            <div className="item__main-album">
              {this.showAlbum('main__control')}
            </div>
          </div>
          <div className="item__main-description">
            <h2 className="item__main-description-title">{this.props.activeItem.name}</h2>
            <p className="item__main-description-info">{this.props.activeItem.description}</p>
            <p className="item__main-description-price">{`Цена: ${this.props.activeItem.price}`}</p>
          </div>
        </section>
      </main>
    );
  }
}

function mapStateToProps(state){
  return {
    activeItem: state.activeItem
  }
}

export default connect(mapStateToProps)(ItemDescription);
