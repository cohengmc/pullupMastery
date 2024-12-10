import { useContext } from "react";
import { StoreContext } from "../App";
import BasicButton from "../components/BasicButton";

const ChooseDay = () => {
	const storeContext = useContext(StoreContext);
	const handleClick = (event) => {
		const target = event.target as HTMLElement;
		storeContext.setStore({
			...storeContext.store,
			currentDay: target.innerText,
		});
	};

	return (
		<div className="dayPage">
			<h1>Choose a Day</h1>
			<div className="buttonStack">
				<BasicButton onClick={handleClick} onKeyDown={handleClick} name="1" />
				<BasicButton onClick={handleClick} onKeyDown={handleClick} name="2" />
				<BasicButton onClick={handleClick} onKeyDown={handleClick} name="3" />
			</div>
		</div>
	);
};
export default ChooseDay;
