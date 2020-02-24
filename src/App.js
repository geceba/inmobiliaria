import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import ListaInmuebles from './components/Views/ListaInmuebles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppNavBar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme/theme';

import RegistrarUsuario from './components/security/RegistrarUsuario';
import Login from './components/security/Login';

function App(props) {
	return (
		<Router>
			<MuiThemeProvider theme={theme}>
				<AppNavBar />
				<Grid container>
					<Switch>
						<Route path="/" exact component={ListaInmuebles} />
						<Route path="/auth/registrarUsuario" exact component={RegistrarUsuario} />
						<Route path="/auth/login" exact component={Login} />
					</Switch>
				</Grid>
			</MuiThemeProvider>
		</Router>
	);
}

export default App;
