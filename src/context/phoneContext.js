import React, { createContext, useReducer} from 'react';
import PhoneReducer from '../reducers/PhoneReducer'
import {storeProducts} from '../data'
export const PhoneContext = createContext();


const PhoneContextProvider = (props) => {
	const [phones, dispatch] = useReducer(PhoneReducer, storeProducts)
		return (
			<PhoneContext.Provider value={{phones, dispatch}} >
				{props.children}
			</PhoneContext.Provider>
		)
	
}

export default PhoneContextProvider;