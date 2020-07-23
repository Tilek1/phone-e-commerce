import React, {useState, useEffect, useContext} from 'react';
import {PhoneContext} from '../context/phoneContext'

const Payment = ({phones}) => {
	console.log(phones)
	let [total, setTotal] = useState(0)
	let [tax, setTax] = useState(0)
	let [subTotal, setSubTotal] = useState(0)
	const {dispatch} = useContext(PhoneContext)
	const handleClick = () => {
		dispatch({
			type: "CLEAR_CART"
		})
	}

	useEffect(() => {
		let i = 0;
		phones.forEach(c => {
			i += c.total;
		})
		setSubTotal(i)
		setTotal(i)
			console.log(subTotal)
		setTax((subTotal / 100 * 5));

	}, [phones])

	return (
		<div className="Payment">
			<button className="payment-btn" onClick={handleClick}>Clear Card</button>
			<h2>Subtotal: $ {subTotal} </h2>
			<h2>Tax: $ {tax}</h2>
			<h2>Total: $ {subTotal + tax} </h2>
		</div>
	)
}

export default Payment