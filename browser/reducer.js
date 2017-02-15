const hardcodedPup = {
	id: 1,
	name: 'Taylor',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
};

const initialState = {
	allPuppies: [],
	selectedPup: hardcodedPup
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
