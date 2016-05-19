import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: '' }
	}

	componentDidMount() {
		this.onInputChange('');
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
					placeholder="Search any Minion" />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
	}
}

export default SearchBar;