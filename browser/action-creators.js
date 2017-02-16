export const receivePups = puppies => ({
	type: 'RECEIVE_PUPS',
	allPuppies: puppies
});

export const receivePup = pup => ({
	type: 'RECEIVE_PUP',
	selectedPup: pup
});

export const fetchPups = () => (
	dispatch => {
		fetch('/api/puppies')
			.then(res => res.json())
			.then(pups => {
				dispatch(receivePups(pups));
			})
			.catch(err => {
				console.error(err);
			});
	}
);

export const fetchPup = id => (
	dispatch => {
		fetch(`/api/puppies/${id}`)
			.then(res => res.json())
			.then(pup => {
				dispatch(receivePup(pup));
			})
			.catch(err => {
				console.error(err);
			});
	}
);
