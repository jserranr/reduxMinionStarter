import { SEARCH_ACTION, CLICK_ACTION } from './types';
import minionsJSON from '../resources/minions';

export function searchMinion(term) {

	return {
		type: SEARCH_ACTION,
		payload: getMinionListByTerm(term)
	}
}

export function selectMinion(minion) {
	return {
		type: CLICK_ACTION,
		payload: minion
	}
}

function getMinionListByTerm(term) {
	const termLowerCase = term.toLowerCase();
	return minionsJSON.filter(minion => {
		return termLowerCase === '' || minion.name.toLowerCase().indexOf(termLowerCase) >= 0; 
	});
}