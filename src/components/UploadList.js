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

class UploadList extends Component {
	state = {
		images: [],
		imageSources: []
	}


	constructor(props){
		super(props);
		this.fileLoaderChange = this.fileLoaderChange.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.closeLightBox = this.handleDeleteClick.bind(this);

	}

	closeLightBox(){
		this.setState({lightboxIsOpen: false});
	}


	addButtonClicked = () =>{
		document.getElementById('fileLoader').click();
	}

	handleDeleteClick(idx){
		var images = this.state.images;
		var imageSources = this.state.imageSources;
		images.splice(idx, 1);
		imageSources.splice(idx, 1);
		this.setState({images: images, imageSources: imageSources})
	}

	fileLoaderChange(event){
		// var fileLoader = document.getElementById('fileLoader');
		var fileList = event.target.files;
		console.log(fileList);
		var images = this.state.images;
		var imageSources = this.state.imageSources;
		for(let i = 0; i < fileList.length; i++){
			var file = fileList[i]
			var url = URL.createObjectURL(file);
			var newImage = {
				filepath: file.name,
				label: file.name,
				url: url
			}
			images.push(newImage);
			imageSources.push({src: url});
			console.log(imageSources);
		}

		this.setState({
			images: images,
			imageSources: imageSources
		})
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
							<Input defaultValue={image.label}/>
						</ListItemText>

						<ListItemText style={{textAlign: "right"}} primary={image.filepath}>
						</ListItemText>

						<ListItemSecondaryAction onClick={() =>{
							this.handleDeleteClick(idx);
						}}>
							<IconButton aria-label="Delete">
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			<ListItem button onClick={this.addButtonClicked}>
				<ListItemIcon>
					<AddCircle color="primary"/>
				</ListItemIcon>
				<ListItemText primary="Add Image"/>
			</ListItem>
			</List>
		</Paper>
		<input type="file" id="fileLoader" style={{display: "none"}} accept="image/*" onChange={this.fileLoaderChange} />
		<button onClick={()=> this.setState({lightboxIsOpen: true})}></button>
		<Lightbox
		  images={this.state.imageSources}
		  isOpen={this.state.lightboxIsOpen}
		  onClose={this.closeLightBox}
		/>
		</div>

		)}
}


export default UploadList