import { SEARCH_ACTION } from './types';
import minionsJSON from '../resources/minions';

export function searchMinion(term) {

	return {
		type: SEARCH_ACTION,
		payload: getMinionListByTerm(term)
	}
}

function getMinionListByTerm(term) {
	const termLowerCase = term.toLowerCase();
	return minionsJSON.filter(minion => {
		return termLowerCase === '' || minion.name.toLowerCase().indexOf(termLowerCase) >= 0; 
	});
}