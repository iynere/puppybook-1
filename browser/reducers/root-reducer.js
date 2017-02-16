import {combineReducers} from 'redux';
import puppiesReducer from './puppies-reducer';
import puppyReducer from './puppy-reducer';

export default combineReducers({
	allPuppies: puppiesReducer,
	selectedPup: puppyReducer
});
