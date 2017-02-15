import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import {fetchPups} from './action-creators';

const mapStateToProps = state => ({
	allPuppies: state.allPuppies
});

export default connect(mapStateToProps)(AllPuppies);
