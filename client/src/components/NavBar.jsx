import React, { Component } from 'react'

const MenuItems = [
	{
		title: 'Home',
		url: '#',
		cName: 'nav-links'
	},
	{
		title: 'Charts',
		url: '#',
		cName: 'nav-links'
	},
	{
		title: 'Sign Out',
		url: '#',
		cName: 'nav-links'
	}
]


const NavBar = () => {
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
