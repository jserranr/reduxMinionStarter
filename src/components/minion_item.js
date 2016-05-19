import React from 'react';

const MinionItem = (props) => {
  return (
    <div 
		className="col-md-3 minion-item"
		key={props.minion.id}>
		<img className="media-object" src={`src/resources/img/${props.minion.imgName}`} />
		<div className="media-heading">{props.minion.name}</div>
	</div>
  )
}

export default MinionItem;