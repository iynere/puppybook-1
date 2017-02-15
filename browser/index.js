'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import store from './store';
import {fetchPups} from './action-creators';
import AllPuppiesContainer from './AllPuppiesContainer';
import SinglePuppyContainer from './SinglePuppyContainer';

const onEnter = () => {
	store.dispatch(fetchPups());
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" onEnter={onEnter}>
  			<Route path="/puppies" component={AllPuppiesContainer} />
  			<Route path="/puppies/:id" component={SinglePuppyContainer} />
  			<IndexRoute component={AllPuppiesContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
