import React, { Component} from 'react';
import { Buscador } from '../Buscador/';
import { Resultado } from '../Resultado/';
import { Info } from '../Info/';

export class Pokedex extends Component{
	constructor(props){
		super(props);
		this.state = {
			valor: ''
		}
	}



	render(){

		return(
			<div className="container">
				<div className="row pt-5 pb-5">
					<div className="">
				      	<h1>PokéDex</h1>
				      	<Buscador valor={this.state.valor}  />
				      	<Resultado />
				      	<Info />
		      		</div>
		      	</div>
	      </div>
		);
	}
}
