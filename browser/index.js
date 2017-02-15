'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';

import AllPuppiesContainer from './AllPuppiesContainer';
import {fetchPups} from './action-creators';

const onEnter = () => {
	store.dispatch(fetchPups());
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" onEnter={onEnter}>
  			<Route path="puppies" component={AllPuppiesContainer} />
  			<IndexRoute component={AllPuppiesContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
