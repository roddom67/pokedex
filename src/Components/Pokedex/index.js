import React, { Component} from 'react';
import { Buscador } from '../Buscador/';
import { Resultado } from '../Resultado/';
import { Info } from '../Info/';

export class Pokedex extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: "Pokédex",
			value: '',
			todos: [],
			submit: false,
			findPokemon: ''
		};
		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		const value = e.target.value;
		
		this.setState({
			value: value
		});		
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const ajaxFile = 'https://pokeapi.co/api/v2/pokemon/' + this.state.value;
		console.log(ajaxFile)
		console.log('https://pokeapi.co/api/v2/pokemon/' + this.state.value);
		this.setState({
			submit:true,
			findPokemon: ajaxFile
		})
		console.log(this.state.submit)
	}

	//https://pokeapi.co/api/v2/pokemon/ditto/
	componentWillMount() {
		if(this.state.submit){
			//https://pokeapi.co/api/v2/pokemon/Numero o nombre
			console.log(this.state.findPokemon);
			fetch(this.state.findPokemon)
				.then(res => res.json())
				.then((data) => {
			  		this.setState({ todos: data })
			  		console.log(this.state.todos)
				})
				.catch(console.log)
		}
	}
	componentWillReceiveProps(newProps){
		console.log('Recibo cambios')
	}

	render(){

		return(
			<div className="container">
				<div className="row pt-5 pb-5">
					<div className="">
				      	<h1>PokéDex</h1>
				      	<Buscador 
				      		value={this.value}
							handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}  />
				      	<Resultado />
				      	<Info />
		      		</div>
		      	</div>
	      </div>
		);
	}
}
