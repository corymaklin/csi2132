import React from 'react';
import './App.css';
import Properties from './Properties';
import Add from './Add';
import Login from './Login';
import Signup from './Signup';
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
			<Route path="/property" exact={ true } component={ Add } />
			<Route path="/login" exact={ true } component={ Login } />
			<Route path="/signup" exact={ true } component={ Signup } />
		</Router>
	);
}

export default App;