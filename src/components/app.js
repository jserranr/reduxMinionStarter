import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import MinionList from '../containers/minion_list';

export default class App extends Component {

	render() {
		return (
			<div>
				<SearchBar />
				<MinionList />
			</div>
		);
	}
}
