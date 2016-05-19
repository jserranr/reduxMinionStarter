import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import MinionItem from '../components/minion_item';

export default class App extends Component {

	render() {
		const minion = {
			"id": 1,
			"name": "Bob",
			"imgName": "bob.jpg"
		};

		return (
			<div>
				<SearchBar />
				<MinionItem key={minion.id} minion={minion} />
			</div>
		);
	}
}
