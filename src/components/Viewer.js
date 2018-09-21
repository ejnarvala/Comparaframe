import React, { Component } from 'react'


class Viewer extends Component{
	state = {
		images: []
	}
	render(){
		return(
			this.state.images.length ? (<div>i have images</div>) : null
		)
	}
}

export default Viewer