import React, { Component } from 'react';
import MinionItem from '../components/minion_item';
import { connect } from 'react-redux';

class MinionList extends Component {

	createMinionMap() {
		return this.props.minionList.map(minion => {
			return (
				<MinionItem key={minion.id} minion={minion} />
			);
		});
	}

	render() {
		if (!this.props.minionList) {
			return <div>Loading</div>
		}

		return (
			<ul className="col-md-10">
				{this.createMinionMap()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		minionList: state.minionList
	}
}

export default connect(mapStateToProps)(MinionList);