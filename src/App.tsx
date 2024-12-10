import { createContext, useState } from "react";
import "./App.css";
import ChooseDay from "./pages/ChooseDay";

export const StoreContext = createContext({
	store: {},
	setStore: ({}) => {},
});

function App() {
	const [store, setStore] = useState({ currentDay: "" });

	console.log(store);

	return (
		<StoreContext.Provider value={{ store, setStore }}>
			{store.currentDay === "" ? <ChooseDay /> : ""}
		</StoreContext.Provider>
	);
}

export default App;
