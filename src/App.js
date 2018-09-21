import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import ImageListViewer from './components/ImageListViewer'


import './App.css';

class App extends Component {


	render() {
		return (
			<div style={{margin:"4vw"}}>
				<NavBar/>
				<Banner/>
				<ImageListViewer/>
			</div>
		);
	}
}

export default App;
