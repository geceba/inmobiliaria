import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ListaInmuebles extends Component {
	render() {
		return (
			<div>
				<Button variant="contained" color="primary">
					Color primario
				</Button>
				<Button variant="contained" color="secondary">
					Color secundario
				</Button>
			</div>
		);
	}
}

export default ListaInmuebles;
