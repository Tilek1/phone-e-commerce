
const PhoneReducer = (state, action) => {
	switch(action.type) {
		case "ADD_CART":
			return state.map(c => {
				if (c.id === action.payload) {
					c.inCart = 'false';
					c.total = c.price
					c.count = 1
				}
				return c;
			})
		case "INCREMENT" : 
			return state.map(c => {

				if (c.id === action.payload) {
					c.count ++;
					c.total = c.count * c.price
				}
				return c
			})

		case "DECREMENT" : 
			return state.map(c => {
				if (c.id === action.payload) {
					if (c.count === 1) {
						c.count = 1;
						c.total = c.price
					} else {
						c.count--;
						c.total = c.count * c.price
					}
				}
				return c;
			})

		case "REMOVE" : 
			return state.map(c => {
				if (c.id === action.payload) {
					c.inCart = false;
				}
				return c
			})	

		case "CLEAR_CART" :
			console.log('ld')
			return state.map(c => {
				c.inCart = false;
				return c;
			})

		default :
		 	return state;
	}
}

export default PhoneReducer