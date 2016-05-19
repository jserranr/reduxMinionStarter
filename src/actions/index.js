import minionsJSON from '../resources/minions';

function getMinionListByTerm(term) {
	const termLowerCase = term.toLowerCase();
	return minionsJSON.filter(minion => {
		return termLowerCase === '' || minion.name.toLowerCase().indexOf(termLowerCase) >= 0; 
	});
}