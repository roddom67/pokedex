import React, { Component} from 'react';
import styles from './Info.module.css';

export class Info extends Component{
	render(){
		return(
			<div className="container">
				<div className={[styles.info, "row"].join(" ")}>
					<div className="pt-4 pb-5 col-sm-9">
						<h2>Nombre Pokémon</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, nisi in mattis vestibulum, lacus tortor sagittis orci, a egestas diam ante a lectus. In bibendum commodo leo, in vehicula dui interdum quis. Quisque a odio vel urna consectetur porta a sit amet risus. Nulla vel nisi luctus, mattis magna nec, ornare enim. Fusce aliquet scelerisque blandit. Integer pellentesque tortor at leo pharetra, ut gravida ex mollis. Maecenas elit enim, consequat a blandit nec, pellentesque eget neque. Praesent posuere nunc ac ante consectetur hendrerit. </p>
					</div>
					<div className={[styles.evolucion, "pt-4 pb-5 col-sm-3"].join(" ")}>
						<ul>
							<li>
								<a href="#" title=""><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Lorem ipsum" />Lorem ipsum</a>
							</li>
							<li>
								<a href="#" title=""><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="Dolor sit amet" />Dolor sit amet</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}


