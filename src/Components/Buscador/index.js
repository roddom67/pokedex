import React, { Component} from 'react';
import styles from './Buscador.module.css';

export class Buscador extends Component{
	render(){
		return(
			<form onSubmit={this.props.handleSubmit}>
			 	<fieldset>
				 	<ul className={styles.listado}>
				 		<li>
				 			<label htmlFor="pokemon">Nombre o número de Pokémon</label>
				 			<input 
				 				id="pokemon"
								value={this.props.value}
								onChange={this.props.handleChange} />
				 		</li>
				 		<li>
				 			<button>Buscar</button>
				 		</li>
				 	</ul>
				</fieldset>
			</form>
		);
	}
}
