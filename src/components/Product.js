import React, {useState, useContext} from 'react';
import {PhoneContext} from '../context/phoneContext'
import ModalWindow from './modalWindow'

const Product = ({phone}) => {
	const [load, setLod] = useState(false)
	const {dispatch} = useContext(PhoneContext)
	let a = 0;
	const handleClick = () => {
		setLod(true)

		a = window.pageYOffset
		dispatch({
			type: 'ADD_CART',
			payload: phone.id
		})
	}



	return (
		<div className="product">
			<img src={`${phone.img}`} alt="img"/>
			<div className='product-bottom'>
				<h1>{phone.title}</h1>
				<h1 className="product-price">$ {phone.price}</h1>
				<button onClick={handleClick} className="product-btn">{phone.inCart ? 'In Cart' : 'Add to Cart'}</button>
			</div>
			<ModalWindow load={load} phone={phone} setLod={setLod} topVal={a} />
		</div>
	)
}

export default Product