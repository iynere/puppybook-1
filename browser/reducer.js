export default (state = {allPuppies: []}, action) => {
	
	const newState = Object.assign({}, state);
	
	switch (action.type) {
		case 'RECEIVE_PUPS':
			return Object.assign(newState, {
				allPuppies: action.allPuppies
			});
		default:
			return newState;
	}
};
