import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class Banner extends Component {
	constructor(props){
		super(props);
		this.dismissBanner = this.dismissBanner.bind(this);
	}

	state = {
		open: true
	}

	dismissBanner() {
		this.setState({open: false})
	}

	render(){
		return(
		this.state.open ?
		(<div>
		<Paper style={{padding: "3em 2em", margin:"3vh auto"}}>
			<Grid container direction="column">
				<Grid item>
					<Typography variant="display3" color="inherit" gutterBottom>
						Comparaframe
				  	</Typography>
			  	</Grid>
			  	<Grid item>
				  	<Typography variant="headline" color="inherit" paragraph>
						This was made on September 19th, 2018 at Georgia Tech for my friend Sup who is really into his media collection.
						<br/>This tool allows Sup to add and remove images from a list and view them in a gallary.
						<br/>Sup will be using this to upload screenshots of original and encoded videos to check their quality.
				  	</Typography>
			  	</Grid>
			  	<Grid item>
				 	<Typography variant="title" color="inherit">
						Hope it works...
				  	</Typography>
			  	</Grid>
			  	<Grid container justify="flex-end">
					<Grid item>
						<Tooltip title="Dismiss Banner">
							<Button onClick={this.dismissBanner}>Dismiss</Button>
						</Tooltip>
					</Grid>
			  </Grid>
			</Grid>
		</Paper>
		</div>) : <div style={{height: "3em"}}></div>
		)
	}
}
export default Banner;