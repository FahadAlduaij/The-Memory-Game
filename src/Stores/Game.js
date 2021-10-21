import { makeObservable, observable, makeAutoObservable } from "mobx";
import CardsArray from "../CardsArray";

class Game {
	flipped = 0;
	flippedArray = [];
	cardEqual = false;
	mainImage = CardsArray.filter((card) => card.id === 1).map(
		(card) => card.img
	);

	constructor() {
		makeAutoObservable(this, {});
	}

	startGame = (id) => {
		this.flippedArray.push(id);
		const currentImage = CardsArray.filter((card) => card.id === id).map(
			(card) => card.img
		);
		this.mainImage = currentImage;
		if (
			this.flippedArray.length === 2 &&
			this.flippedArray[0] !== this.flippedArray[1]
		) {
			console.log("Not Match");
			this.mainImage = CardsArray.filter((card) => card.id === 1).map(
				(card) => card.img
			);
			this.flippedArray = [];
			// setCardEqual(false);
			// setFlipArray([]);
			// console.log(flipArray);
		} else if (
			this.flippedArray.length === 2 &&
			this.flippedArray[0] === this.flippedArray[1]
		) {
			console.log(`Match`);
			this.flippedArray = [];
		}
	};
}

const game = new Game();
export default game;
