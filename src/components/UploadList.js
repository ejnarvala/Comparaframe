import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Image from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider';
import AddCircle from '@material-ui/icons/AddCircle'
import Input from '@material-ui/core/Input';
import Lightbox from 'react-images';
import Button from '@material-ui/core/Button';


class UploadList extends Component {
	state = {
		images: [],
		lightboxIsOpen: false,
		currentImage: 0,
		buttonText: "Show Images",
		buttonColor: "secondary"
	}


	constructor(props){
		super(props);
		this.fileLoaderChange = this.fileLoaderChange.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleLabelChange = this.handleLabelChange.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	openLightbox () {
		if(this.state.images.length){
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


	handleLabelChange(event){
		var images = this.state.images;
		console.log(event.target.value);
		images[Number(event.target.name)].caption = event.target.value;
		this.setState({
			images: images
		})
	}

	addButtonClicked = () =>{
		document.getElementById('fileLoader').click();
	}

	handleDeleteClick(event){
		var images = this.state.images;
		images.splice(event.target.name, 1);
		this.setState({
			images: images
		});
	}

	fileLoaderChange(event){
		// var fileLoader = document.getElementById('fileLoader');
		var fileList = event.target.files;
		// console.log(fileList);
		var images = this.state.images;
		for(let i = 0; i < fileList.length; i++){
			var file = fileList[i]
			var url = URL.createObjectURL(file);
			images.push({
				src: url,
				caption: file.name,
				filepath: file.name
			});
			// console.log(images);
		}
		event.target.value = '';
		this.setState({
			images: images,
		});
	}


	render(){
		return(
		<div>
		<Paper>
			<List>
				{this.state.images.map((image, idx) => (
					<ListItem divider key={idx}>
						<ListItemIcon>
							<Image/>
						</ListItemIcon>

						<ListItemText >
							<Input defaultValue={image.caption} name={idx.toString()} onChange={this.handleLabelChange}/>
						</ListItemText>

						<ListItemText style={{textAlign: "right"}} primary={image.filepath}>
						</ListItemText>

						<ListItemSecondaryAction name={idx.toString()} onClick={this.handleDeleteClick}>
							<IconButton aria-label="Delete">
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			<ListItem button onClick={this.addButtonClicked}>
				<ListItemIcon>
					<AddCircle color="secondary"/>
				</ListItemIcon>
				<ListItemText primary="Add Image"/>
			</ListItem>
			</List>
		</Paper>
		<input type="file" id="fileLoader" style={{display: "none"}} accept="image/*" multiple onChange={this.fileLoaderChange} />
		<div style={{textAlign: "center", margin: "1em"}}>
			<Button color={this.state.buttonColor} onClick={this.openLightbox} variant="extendedFab">{this.state.buttonText}</Button>
		</div>
		<Lightbox
			currentImage={this.state.currentImage}
			images={this.state.images}
			isOpen={this.state.lightboxIsOpen}
			onClickNext={this.gotoNext}
			onClickPrev={this.gotoPrevious}
			onClose={this.closeLightbox}
			backdropClosesModal
			enableKeyboardInput
			preloadNextImage
			showImageCount={false}
		/>
		</div>

		)}
}


export default UploadList