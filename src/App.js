import "./App.css";
import CardList from "./Components/CardList";
import CardsArray from "./CardsArray";
import { useState, useEffect } from "react";

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

	const [flipped, setFlipped] = useState(0); // Number of image that flipped.
	const [flipArray, setFlipArray] = useState([]); // Array to push and look for a match.
	const [equal, setEqual] = useState(false); // If there is match it becomes true.
	const [change, setChange] = useState("Play"); // Change Button Name.

	const array = CardsArray.filter((card) => card.id !== 1).map((card) => (
		<CardList
			key={card.id}
			id={card.img}
			flipped={flipped}
			setFlipped={setFlipped}
			equal={equal}
			setEqual={setEqual}
			flipArray={flipArray}
			setFlipArray={setFlipArray}
		/>
	));

	useEffect(() => {
		if (flipArray.length === 2 && flipArray[0] !== flipArray[1]) {
			console.log("Not Match");
			setFlipArray([]);
		} else if (flipArray.length === 2 && flipArray[0] === flipArray[1]) {
			console.log(`Match`);
			setFlipArray([]);
		}
	});

	console.log(flipArray);

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
			<div className="card-container">
				{array}
				{array}
			</div>
		</div>
	);
}

export default App;
