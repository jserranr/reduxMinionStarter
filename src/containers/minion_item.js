import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectMinion } from '../actions';

class MinionItem extends Component {

	constructor(props) {
		super(props);
	}

	onMinionSelect(event) {
		this.props.selectMinion(this.props.minion);
	}

	render() {
		return (
			<div 
				className="col-md-3 minion-item"
				key={this.props.minion.id}
				onClick={(event) => {this.onMinionSelect(event)} }>
				<img className="media-object" src={`src/resources/img/${this.props.minion.imgName}`} />
				<div className="media-heading">{this.props.minion.name}</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectMinion }, dispatch);
}

export default connect(null, mapDispatchToProps)(MinionItem);