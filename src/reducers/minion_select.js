import { CLICK_ACTION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case CLICK_ACTION:
			return [ action.payload, ...state  ];
		default:
			return state;
	}
}