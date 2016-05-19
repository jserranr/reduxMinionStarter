import React, { Component } from 'react';
import { connect } from 'react-redux';

class MinionSelected extends Component {

	renderSelectedList() {
		return this.props.minionSelectedList.map((minion) => {
			return <li key={minion.id}>{minion.name}</li>;
		});
	}

	render() {
		if (!this.props.minionSelectedList || this.props.minionSelectedList.length == 0) {
			return <div className="col-md-2 list-group">No minion selected</div>;
		}

		return <ul className="col-md-2 list-group">{this.renderSelectedList()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		minionSelectedList: state.minionSelect
	}
}

export default connect(mapStateToProps)(MinionSelected);