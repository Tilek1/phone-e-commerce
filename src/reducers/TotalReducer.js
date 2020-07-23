const TotalReducer = (state, action) => {
	switch(action.type) {
		case "PLUS": 
			return [...state, action.pyaload]

		default: return state;			
	}
	return state;
}

export default TotalReducer