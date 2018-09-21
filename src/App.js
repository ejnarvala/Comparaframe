import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import UploadList from './components/UploadList'
import './App.css';
		// <UploadGrid size={4}></UploadGrid>

class App extends Component {
render() {
	return (
		<div style={{margin:"4vw"}}>
		<NavBar></NavBar>
		<Banner></Banner>
		<UploadList></UploadList>
		</div>
	);
	}
}

export default App;
