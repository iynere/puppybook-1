const initialState = {
	allPuppies: []
};

export default (state = initialState, action) => {
	
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
