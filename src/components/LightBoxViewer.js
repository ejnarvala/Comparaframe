import React, { Component } from 'react'
import Lightbox from 'react-images-zoom';
import Button from '@material-ui/core/Button';



class LightBoxViewer extends Component{
	state = {
		currentImage: 0,
		buttonText: "Show Images",
		buttonColor: "secondary",
		lightboxIsOpen: false,
	}
	

	constructor(props){
		super(props);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		
		document.addEventListener('keyup', (event) => {
		  const keyNum = Number(event.key);
		  if(this.state.lightboxIsOpen && keyNum && keyNum <= this.props.images.length){
		  	this.setState({currentImage: keyNum - 1});
		  }
		});
	}

	openLightbox () {
		if(this.props.images.length){
			this.setState({
				currentImage: 0,
				lightboxIsOpen: true,
			});
		}else{
			this.setState({
				buttonText: "No Images Selected!",
				buttonColor: "default"});
			setTimeout(()=>{this.setState({
				buttonText: "Show Images",
				buttonColor: "secondary"
				})}, 2000);
		}

	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}



	render(){
		return(
			<div>
			<div>
			<Lightbox
				currentImage={this.state.currentImage}
				images={this.props.images}
				isOpen={this.state.lightboxIsOpen}
				onClickNext={this.gotoNext}
				onClickPrev={this.gotoPrevious}
				onClose={this.closeLightbox}
				backdropClosesModal={true}
				enableKeyboardInput
				preloadNextImage
				zoomable={true}
				onSave={this.props.imageSaveHandler}
				width={Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 15}
			/>

			</div>
			<div style={{textAlign: "center", margin: "1em"}}>
				<Button color={this.state.buttonColor} onClick={this.openLightbox} variant="extendedFab">{this.state.buttonText}</Button>
			</div>
			</div>
			)
	}
}

export default LightBoxViewer;
