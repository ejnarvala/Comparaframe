import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import UploadCard from './UploadCard'
class UploadGrid extends Component {
	state = {
		keys: Array.apply(null, {length: this.props.size}).map(Number.call, Number)
	}
    render(){
    	return(
            <div style={{margin: "0 auto"}}>
                <Grid container spacing={24} justify="center" >
                    { this.state.keys.map(key => (
                        <Grid item key={key} xs={12} sm={6} lg={4} xl={3}>
                        	<UploadCard cardId={key}></UploadCard>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
	}
}
export default UploadGrid;