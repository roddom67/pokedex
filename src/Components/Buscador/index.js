import React, { Component} from 'react';
import styles from './Buscador.module.css';

export class Buscador extends Component{
	render(){
		return(
			<form>
			 <fieldset>
			 	<ul className={styles.listado}>
			 		<li>
			 			<label>Nombre o número de Pokémon</label>
			 			<input />
			 		</li>
			 		<li>
			 			<button >Buscar</button>
			 		</li>
			 	</ul>
			 </fieldset>
			</form>
		);
	}
}
