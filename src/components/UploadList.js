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


class UploadList extends Component {

	addButtonClicked = () =>{
		document.getElementById('fileLoader').click();
	}

	render(){
		return(
		<div>
		<Paper>
			<List>
				{this.props.images.map((image, idx) => (
					<ListItem divider key={idx}>
						<Avatar src={image.src}/>
						<ListItemText disableTypography>
							<Input defaultValue={image.caption} name={idx.toString()} onBlur={this.props.labelChangeHandler}/>
							<Typography paragraph variant="body2">{image.filepath}</Typography>
						</ListItemText>

						<ListItemSecondaryAction onClick={() => {this.props.imageDeleteHandler(idx)}}>
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
		<input type="file" id="fileLoader" style={{display: "none"}} accept="image/*" multiple onChange={this.props.imageAddHandler} />
		</div>

		)}
}


export default UploadList