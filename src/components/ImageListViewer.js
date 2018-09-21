import React, { Component } from 'react'
import UploadList from './UploadList'
import LightBoxViewer from './LightBoxViewer'
import Grid from '@material-ui/core/Grid';


class ImageListViewer extends Component {
	state = {
		images: [],
		zoom: 1
	}

	constructor(props){
		super(props);
		this.handleImageDelete = this.handleImageDelete.bind(this);
		this.handleLabelChange = this.handleLabelChange.bind(this);
		this.handleImageAdd = this.handleImageAdd.bind(this);
		this.handleImageSave = this.handleImageSave.bind(this);
	}

	handleLabelChange(event){
		var images = this.state.images;
		console.log(event.target);
		images[Number(event.target.name)].caption = event.target.value;
		this.setState({
			images: images
		})
	}

	handleImageDelete(idx){
		var images = this.state.images;
		images.splice(idx, 1);
		this.setState({
			images: images
		});
	}

	handleImageAdd(event){
		var fileList = event.target.files;
		var images = this.state.images;
		var zoom = this.state.zoom;
		if(images.length < 10){
			for(let i = 0; i < fileList.length; i++){
				var file = fileList[i]
				var url = URL.createObjectURL(file);
				images.push({
					src: url,
					caption: file.name.split('.')[0],
					filepath: file.name,
					initialZoom: zoom
				});
			}
			event.target.value = '';
			this.setState({
				images: images,
			});
		}else{
			console.log('too many images!');
		}
	}

	handleImageSave(idx, params){
		console.log(idx, params);
		var images = this.state.images;
		for(let i in images){
			images[i].initialZoom = params.zoom
		}
		this.setState({
			images: images,
			zoom: params.zoom
		});

	}

	render(){
		return(
			<div>
				<Grid container direction="column" alignItems="center">
					<Grid container justify="center">
						<Grid item lg={8} xl={10} sm={12} xs={12}>
							<UploadList 
								images={this.state.images}
								imageDeleteHandler={this.handleImageDelete}
								labelChangeHandler={this.handleLabelChange}
								imageAddHandler={this.handleImageAdd}
							/>
						</Grid>
					</Grid>
					<Grid item>
						<LightBoxViewer images={this.state.images} imageSaveHandler={this.handleImageSave}/>
					</Grid>
				</Grid>
			</div>
			)
	}
}

export default ImageListViewer;