export const receivePups = puppies => ({
	type: 'RECEIVE_PUPS',
	allPuppies: puppies
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
