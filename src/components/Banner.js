import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

class Banner extends Component {
    render(){
    	return(
            <div>
          <Paper style={{padding: "3em 2em", margin:"3vh auto"}}>
            <Grid container >
              <Grid item>
                <div>
                  <Typography variant="display3" color="inherit" gutterBottom>
                    Comparaframe
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    This was made on September 19th, 2018 at Georgia Tech for my friend Sup who is really into his media collection.
                    <br/>This tool allows Sup to add and remove images from a list and view them in a gallary.
                    <br/>Sup will be using this to upload screenshots of original and encoded videos to check their quality.
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