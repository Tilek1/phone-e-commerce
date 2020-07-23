import React, {useState, useContext, useEffect} from 'react';
import {PhoneContext} from '../context/phoneContext'
import CartItem from './CartItem'
import Payment from './Payment'

const Cart = () => {
	const [cartPhones, setCartPhones] = useState([])
	const {phones} = useContext(PhoneContext)
	let subtotal = 0;
	let total = 0;
	useEffect(() => {
		setCartPhones(() => {
			return (
				phones.filter(c => c.inCart)
			)
		})
		

	}, [phones])
	if (cartPhones.length > 0 ) {	
		return (
			<div className='Cart'>
				<div className="container">
					{
						cartPhones.map(c => {
							return <CartItem key={c.id} item={c}/>
						})
					}
					<Payment phones={cartPhones}/>
				</div>
			</div>
		)
	} else {
		return (
			<div className="Cart">
				<div className="container">
					<h1>Your Cart is currently empty</h1>
				</div>
			</div>
		)
	}
}

export default Cart;