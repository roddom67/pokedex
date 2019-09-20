import React, { Component} from 'react';
import styles from './Resultado.module.css';

export class Resultado extends Component{
	render(){

		return(
			<div className="container">
				<div className="row">
					<div className="pt-4 pb-5 col-sm-12">
						<h2>resultado</h2>
						<ul className={[styles.resultado, "row"].join(" ")}>
							<li className="col-sm-3">
								<a href="#" title=""><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Lorem ipsum" />Lorem ipsum</a>
							</li>
							<li className="col-sm-3">
								<a href="#" title=""><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="Dolor sit amet" />Dolor sit amet</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
