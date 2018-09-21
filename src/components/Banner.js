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
          <Paper style={{padding: "3em", margin: "1em 5em"}}>
            <Grid container>
              <Grid item md={6}>
                <div>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Typography variant="title" color="inherit">
                    Continue reading...
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