import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Banner extends Component {
    render(){
    	return(
            <div>
          <Paper style={{padding: "3em 2em", margin:"3vh auto"}}>
            <Grid container >
              <Grid item md={6}>
                <div>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Comparaframe
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    This was made on September 19th, 2018 at Georgia Tech for my friend Sup who is really into his media collection.
                  </Typography>
                  <Typography variant="title" color="inherit">
                    Hope it works...
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          </div>
        )
	}
}
export default Banner;