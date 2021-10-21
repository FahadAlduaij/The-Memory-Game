import "./App.css";
import CardList from "./Components/CardList";
import { useState } from "react";

function App() {
	// Choose Random Number
	// const Random = (index) => {
	// 	let min = 2;
	// 	let max = CardsArray.length + 1;
	// 	index = min + Math.floor(Math.random() * (max - min));
	// 	return index;
	// };

	//// Start The Game
	// const Flip = (index) => {
	// 	console.log(index);
	// 	let render = CardsArray.filter((card) => card.id === index).map(
	// 		(card) => card.img
	// 	);
	// 	flipArray.push(index);
	// 	return render;
	// };

	const [change, setChange] = useState("Play"); // Change Button Name.

	return (
		<div className="App">
			<span>
				<h1>The Memory Game</h1>
				<p> Your Attempt {}</p>
				<button
					onClick={() => {
						setChange(change === "Play" ? "Reset" : "Play");
					}}
					className="btn"
				>
					{change}
				</button>
			</span>
			<div>
				<CardList />
			</div>
		</div>
	);
}

export default App;
