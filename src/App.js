import React, { Component } from 'react';
import ImageList from './components/ImageList';
import Popup from './components/Popup';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      showPopup: false,
      popupData: ""
    }
    this.fetchImage = this.fetchImage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);
  }

  componentDidMount() {
    const NUM_ITEMS_TO_GENERATE = 60;
    const NUM_IMAGES_AVAILABLE = 64; 
    const IMAGE_WIDTH = 600;
    const IMAGE_HEIGHT = 600; 
    const COLLECTION_ID = 3335442;

    for(let i = 0; i < NUM_ITEMS_TO_GENERATE; i++){
      let randomNumber = Math.floor(Math.random() * NUM_IMAGES_AVAILABLE);
      this.fetchImage(randomNumber, IMAGE_WIDTH, IMAGE_HEIGHT, COLLECTION_ID);
    }
  }

  fetchImage(randomNumber, imageWidth, imageHeight, collectionID) {
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`) 
      .then(data => {
        let newData = this.state.data.concat(data.url)
        this.setState({ data: newData })
      })
      .catch(err => {
				console.log('Error during fetching', err);
			}); 
  } 

  handleClick(imageData) {
    this.setState({ 
      popupData: imageData, 
      showPopup: true 
    });
  }

  handleClosePopup() {
    this.setState({ 
      popupData: "", 
      showPopup: false
    });
  }

  render() {
    return (
      <div className="app">
        <div className="header">TAKE A PEEK THROUGH THE WINDOWS.</div>
				<div className="content">
					<ImageList data={ this.state.data } onClick={ this.handleClick }/>
				</div>
        { this.state.showPopup &&
          <Popup url={ this.state.popupData } closePopup={ this.handleClosePopup }/>
        }
      </div>
    );
  }
}

export default App;
