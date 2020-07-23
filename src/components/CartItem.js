import React, {useContext} from 'react';
import {PhoneContext} from '../context/phoneContext'
import {TotalContext} from '../context/totalContext'

const CartItem = ({item}) => {

	const {dispatch} = useContext(PhoneContext)
	const {totalDispatch} = useContext(TotalContext)

	const handleClick = (e) => {
		console.log(item.total)
		if (e.target.classList.contains('increment')) {
			dispatch({
				type: 'INCREMENT',
				payload: item.id
			})
		} else if (e.target.classList.contains('decrement')) {
			dispatch({
				type: 'DECREMENT',
				payload: item.id
			})
		} else if (e.target.classList.contains('trashIcon')) {
			dispatch({
				type: "REMOVE",
				payload: item.id
			})
		}
	}

	return (
		<div className="cart-item">


			<table className="cart-table">
				<thead>
					
				<tr>
					<th>Product</th>
					<th>Name of Product</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Remove</th>
					<th>Total</th>
				</tr>
				</thead>
				<tbody>
					
				<tr>
					<td><img className="cart-img" src={item.img} alt=""/></td>
					<td>{item.title}</td>
					<td>$ {item.price}</td>
					<td><button className="quantity decrement" onClick={handleClick} >-</button> <button className="quantity" >{item.count}</button> <button onClick={handleClick} className="quantity increment">+</button></td>
					<td><i onClick={handleClick} className="fas fa-trash trashIcon"></i></td>
					<td>Item Total: $ {item.total}</td>
				</tr>
				</tbody>
			</table>

		</div>
	)
}

export default CartItem