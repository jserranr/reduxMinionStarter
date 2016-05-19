import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchMinion } from '../actions/index';

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
		this.props.searchMinion(term);
		this.setState({ term });
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchMinion }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);