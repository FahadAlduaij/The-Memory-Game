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

 const [rule, setRule] = useState(false)

	return (
		<div className="App">
			<div className="card-container">
				<CardList id={image(2)} />
				<CardList id={image(3)}/>
				<CardList id={image(4)}/>
				<CardList id={image(5)}/>
				<CardList id={image(6)}/>
				<CardList id={image(7)}/>
				<CardList id={image(8)}/>
				<CardList id={image(9)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>
				<CardList id={image(4)}/>

			</div>
		</div>
	);
}

export default App;
