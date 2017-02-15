import React from 'react';
import {connect} from 'react-redux';
import SinglePuppy from './SinglePuppy';

const mapStateToProps = state => ({
	selectedPup: state.selectedPup
});

export default connect(mapStateToProps)(SinglePuppy);
