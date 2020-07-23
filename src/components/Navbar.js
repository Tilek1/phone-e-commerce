import React from 'react';
import img from '../img/logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {

	return (
		<div className="navbar-wrap">
			<div className="container">
		<nav className="navbar">

			<div className="navbar-top">
			<img src={img} alt=""/>
			<Link to="/">
				Products
			</Link>
			</div>

			<div className="cart-btn">
				<Link to="/cart">My Cart</Link>
			</div>
		</nav>
		</div>
		</div>
	)
}

export default Navbar