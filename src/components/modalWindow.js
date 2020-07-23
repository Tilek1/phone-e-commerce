import React from 'react';
import {Link} from 'react-router-dom'

const ModalWindow = ({load, phone, setLod}) => {

	if (load) {	
		
		const handleClick = (e) => {
			if (e.target.classList.contains('modal')) {
				e.target.classList.remove('active')
				setLod(false)
			}
		}

		return (
			<div onClick={handleClick} className="modal active">
				<div className="modal-inner">
				<img src={phone.img} alt=""/>
				<h1>{phone.title}</h1>
				<h2>Price: {phone.price}</h2>
				<Link className="modalLink" to='/' onClick={() => setLod(false)} >Continue Shopping</Link>

				<Link className="modalLink" to="/cart">Go to Cart</Link>

				</div>
			</div>
		)
	} else {
		return (
			<div>
			</div>
		)
	}


}

export default ModalWindow