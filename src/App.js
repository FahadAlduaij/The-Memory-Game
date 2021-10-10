import "./App.css";
import CardList from "./Components/CardList";
import CardsArray from "./CardsArray";
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

	const [flipped, setFlipped] = useState(0); // Number of image that flipped.
	const [flipArray, setFlipArray] = useState([]); // Array to push and look for a match.
	const [cardEqual, setCardEqual] = useState(false); // If there is match it becomes true.
	const [change, setChange] = useState("Play"); // Change Button Name.

	let array = CardsArray.filter((card) => card.id !== 1).map((card) => (
		<CardList
			key={card.id}
			id={card.id}
			image={card.img}
			flipped={flipped}
			setFlipped={setFlipped}
			flipArray={flipArray}
			setFlipArray={setFlipArray}
		/>
	));

	const StartGame = () => {
		if (flipArray.length === 2 && flipArray[0] !== flipArray[1]) {
			console.log("Not Match");
			setCardEqual(false);
			setFlipArray([]);
			console.log(flipArray);
		} else if (flipArray.length === 2 && flipArray[0] === flipArray[1]) {
			console.log(`Match`);
			setCardEqual(true);
			setFlipArray([]);
			console.log(flipArray);
		}
	};

	StartGame();

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
