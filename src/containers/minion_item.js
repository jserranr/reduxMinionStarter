import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMinion } from '../actions';

class MinionItem extends Component {

	constructor(props) {
		super(props);

		this.state = { selected: this.selected() };
	}

	onMinionSelect(event) {
		if (!this.state.selected) {
			this.setState({ selected: true });
			this.props.selectMinion(this.props.minion);
		}
	}

	selectedClass() {
		return this.selected() ? 'minion-selected': '';
	}

	selected() {
		for (let i=0; i<this.props.minionSelectedList.length; i++) {
			if (this.props.minionSelectedList[i].id == this.props.minion.id) {
				return true;
			}
		}
		return false;
	}

	render() {
		return (
			<div 
				className={`col-md-3 minion-item ${this.selectedClass()}`}
				key={this.props.minion.id}
				onClick={(event) => {this.onMinionSelect(event)} }>
				<img className="media-object" src={`src/resources/img/${this.props.minion.imgName}`} />
				<div className="media-heading">{this.props.minion.name}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		minionSelectedList: state.minionSelect
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectMinion }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MinionItem);