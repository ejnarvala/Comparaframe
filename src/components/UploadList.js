import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper'
import AddCircle from '@material-ui/icons/AddCircle'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Dropzone from 'react-dropzone'


class UploadList extends Component {
	state={
		dropzoneActive: false
	}

	onDragEnter() {
		this.setState({
			dropzoneActive: true
		});
	}

	onDragLeave() {
		this.setState({
			dropzoneActive: false
		});
	}

	onDrop(files){
		this.props.imageAddHandler(files);
		this.setState({dropzoneActive: false})
	}

	render(){
		let dropzoneRef;
		const overlayStyle = {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			background: 'rgba(0,0,0,0.1)',
			borderRadius: '5px',
			color: '#fff'
		};
		return(
		<div>
		<Paper>
		<Dropzone
			ref={(node) => { dropzoneRef = node; }}
			disableClick
			style={{position: "relative"}}
			accept="image/*"
			onDrop={this.onDrop.bind(this)}
			onDragEnter={this.onDragEnter.bind(this)}
			onDragLeave={this.onDragLeave.bind(this)}
		>
		{this.state.dropzoneActive && <div style={overlayStyle}></div>}
			<List>
				{this.props.images.map((image, idx) => (
					<ListItem divider key={idx}>
						<Avatar src={image.src}/>
						<ListItemText disableTypography>
							<Input style={{lineHeight: "1.4", marginBottom: ".2em"}} defaultValue={image.caption} name={idx.toString()} onBlur={this.props.labelChangeHandler}/>
							<Typography paragraph variant="body2">{image.filepath}</Typography>
						</ListItemText>

						<ListItemSecondaryAction onClick={() => {this.props.imageDeleteHandler(idx)}}>
							<Tooltip title="Delete">
								<IconButton aria-label="Delete">
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			<ListItem button onClick={() => {dropzoneRef.open()}}>
				<ListItemIcon>
					<AddCircle fontSize="large" color="secondary"/>
				</ListItemIcon>
				<ListItemText style={{paddingLeft: 0}} primary="Add Image" primaryTypographyProps={{variant:"button"}}/>
			</ListItem>
			</List>
		</Dropzone>
		</Paper>
		</div>

		)}
}


export default UploadList