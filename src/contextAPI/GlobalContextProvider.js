import React, { useContext, useReducer } from "react";

export const GlobalContext = React.createContext();

function GlobalContextProvider({ reducer, initialState, children }) {
	return (
		<GlobalContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContextProvider;

export const useStateValue = () => useContext(GlobalContext);
