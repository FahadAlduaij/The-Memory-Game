import "./App.css";
import CardList from "./Components/CardList";
import CardsArray from "./CardsArray";
import { useState } from 'react'

function App() {
  function image(index) {
    return CardsArray.filter((card) => card.id === index).map(
     (card) => card.img
   );
 }

 const [flipped, setFlipped] = useState(0)
console.log(flipped)

let arr = []
function startGame() {
  if (flipped > 2) {

    alert("Restart")
    
  }
}

startGame()

	return (
		<div className="App">
      <h1>The Memory Game</h1>
			<div className="card-container">
				<CardList id={image(2)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(3)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(4)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(5)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(8)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(7)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(6)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(9)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(8)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(2)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(3)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(4)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(6)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(7)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(5)} role={flipped} setRole={setFlipped}/>
				<CardList id={image(9)} role={flipped} setRole={setFlipped}/>
			</div>
		</div>
	);
}

export default App;
