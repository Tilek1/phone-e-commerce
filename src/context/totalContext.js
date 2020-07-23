import React, {createContext, useReducer} from 'react';
import TotalReducer from '../reducers/TotalReducer'

export const TotalContext = createContext();

const TotalContextProvider = (props) => {
	const [subtotal, totalDispatch] = useReducer(TotalReducer, []);

	return (
		<TotalContext.Provider value={subtotal, totalDispatch}>
			{props.children}
		</TotalContext.Provider>
	)
}

export default TotalContextProvider