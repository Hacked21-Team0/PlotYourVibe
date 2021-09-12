import React, { Component } from 'react'
import Barchart from '../components/Barchart'
import '../styles/dashboard.css'

export default class Dashboard extends Component {
	render() {
		return (<div className='bg'>
			<div class="navbar">
				<a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
				<a href="#"><i class="fa fa-fw fa-envelope"></i> Charts</a> 
				<a href="#"><i class="fa fa-fw fa-user"></i> Sign Out</a>
				</div>
			<div className='header'>
				Mood Dashboard
			</div>
			<Barchart/>

			<div className='dash_container'>
				Hello from dashboard


			</div>
			</div>

		)
	}
}
