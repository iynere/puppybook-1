export default (state = {}, action) => {
	switch (action.type) {
		case 'RECEIVE_PUP':
			return action.selectedPup;
		default:
			return state;
	}
};
