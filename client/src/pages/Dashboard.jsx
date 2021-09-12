import React, { Component } from 'react';
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/selectors/user";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class Dashboard extends Component {

	componentDidMount = () => {
		console.log(this.props.currentUser);
	}

	render() {
		return (
			<div className='dash_container'>
				Hello from dashboard
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps, actions)(Dashboard);
