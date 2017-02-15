import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import {fetchPups} from './action-creators';

const hardcodedPups = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];

const mapStateToProps = state => ({
	allPuppies: state.allPuppies
});

export default connect(mapStateToProps)(AllPuppies);
