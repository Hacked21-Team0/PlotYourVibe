import React, { Component, useState } from 'react'


const MenuItems = [
	{
		title: 'Home',
		url: '/Dashboard',
		cName: 'nav-links'
	},
	{
		title: 'Charts',
		url: '/Dashboard',
		cName: 'nav-links'
	},
	{
		title: 'Sign Out',
		url: '/',
		cName: 'nav-links'
	}
]


const NavBar = () => {
	const [clicked, setClicked] = useState(false)
	const handleClick =() =>{
		this.setState({clicked: !this.state.clicked})
	}

	return (
		<div>
			<ul class="navbar">
			{MenuItems.map((item,index) =>
				(
				<li key={index}>
				<a className={MenuItems.cName} href={item.url}>
					{item.title}
				</a>
				</li>)
			)}
			
			</ul>
		</div>
	)
}

export default NavBar
