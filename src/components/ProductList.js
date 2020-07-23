import React, {useContext} from 'react';
import {PhoneContext} from '../context/phoneContext'
import Product from './Product'

const ProductList = (props) => {
	const {phones} = useContext(PhoneContext)

	return (
		<div className="product-list-wrap">
		<h1>Our Products</h1>
		<div className="container">
		<div className="product-list">
			{phones.map(c => {
				return <Product key={c.id} phone={c} />
			})}
		</div>
		</div>
		</div>
	)
}

export default ProductList