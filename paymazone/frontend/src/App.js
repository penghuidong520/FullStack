import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage"
import Navigation from "./components/Navigation"
import SignupForm from './components/SignupFormPage';

const App = () => {
	return (
		<div className="app-container">
			{/* <h1>Hello from App</h1> */}
			<Navigation />
			<Switch>
				<Route path="/login">
					<LoginFormPage />
				</Route>

				<Route path="/signup">
					<SignupForm />
				</Route>

			</Switch>
		</div>
	);
}
	
export default App;
