export default (state = [], action) => {	
	switch (action.type) {
		case 'RECEIVE_PUPS':
			return action.allPuppies;
		default:
			return state;
	}
};
