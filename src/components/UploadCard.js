import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UploadCard extends Component {
    
    render(){
    	return(
            <div>
            <Card style={{maxWidth: 400}}>
                <CardMedia image={require("../static/images/blank.png")} style={{height: 0, paddingTop: '40%'}}/>
                <CardContent>
                    <input type="file" accept="image/*"></input>
                    <Button>Upload now</Button>
                    <Typography>I am card {this.props.cardId}</Typography>
                </CardContent>
            </Card>
            </div>
        )
	}
}
export default UploadCard;