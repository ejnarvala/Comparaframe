import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import UploadCard from './UploadCard'
class UploadGrid extends Component {
    
    render(){
    	return(
            <div style={{margin: "5em"}}>
                <Grid container spacing={24} justify="center" >
                    { this.props.keys.map(key => (
                        <Grid item key={key} xs={12} sm={6} lg={4} xl={4}>
                        	<UploadCard></UploadCard>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
	}
}
export default UploadGrid;


