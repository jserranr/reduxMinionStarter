import { SEARCH_ACTION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SEARCH_ACTION:
			return action.payload;
		default:
			return state;
	}
}