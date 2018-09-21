import React, { Component } from 'react';
import NavBar from './components/NavBar'
import UploadGrid from './components/UploadGrid'
import Banner from './components/Banner'
import './App.css';

class App extends Component {
render() {
	var keys = Array.apply(null, {length: 6}).map(Number.call, Number);
	console.log(keys);
	return (
		<div>
		<NavBar></NavBar>
		<Banner></Banner>
		<UploadGrid keys={keys}></UploadGrid>
		</div>
	);
	}
}

export default App;
