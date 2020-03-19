import React from 'react';
import './App.css';
import Properties from './Properties';
import Form from './Form';
import Navbar from './Navbar';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Navbar />
			<Route path="/" exact={ true } component={ Properties } />
			<Route path="/property" exact={ true } component={ Form } />
		</Router>
	);
}

export default App;
