import "./App.css";
import BasicButton from "./components/BasicButton";

function App() {
	const handleClick = () => {};

	return (
		<>
			<div className="dayPage">
				<h1>Choose a Day</h1>
				<div className="buttonStack">
					<BasicButton onClick={handleClick} onKeyDown={handleClick} name="1" />
					<BasicButton onClick={handleClick} onKeyDown={handleClick} name="2" />
					<BasicButton onClick={handleClick} onKeyDown={handleClick} name="3" />
				</div>
			</div>
		</>
	);
}

export default App;
