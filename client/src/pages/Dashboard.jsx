import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Barchart from '../components/Barchart'
import History from './History'
import '../styles/dashboard.css'

export default class Dashboard extends Component {
	render() {
		return (<div className='bg'>
			
				<NavBar/>

			<div className='header'>
				Mood Dashboard
			</div>
			<Barchart/>
			<History/>
		</div>

		)
	}
}
