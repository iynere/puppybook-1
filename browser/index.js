'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import store from './store';
import {fetchPups, fetchPup} from './action-creators';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';

const onPupsEnter = () => {
	store.dispatch(fetchPups());
};
const onPupEnter = nextRouterState => {
	const pupId = nextRouterState.params.id;
	store.dispatch(fetchPup(pupId));
};

const onAlbumEnter = nextRouterState => {
	const albumId = nextRouterState.params.albumId;
	store.dispatch(getAlbumById(albumId));
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" onEnter={onPupsEnter}>
  			<Route path="/puppies" component={AllPuppiesContainer} />
  			<Route path="/puppies/:id" onEnter={onPupEnter} component={SinglePuppyContainer} />
  			<IndexRoute component={AllPuppiesContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
