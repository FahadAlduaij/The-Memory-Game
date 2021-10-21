import { makeObservable, observable, makeAutoObservable } from "mobx";
import CardsArray from "../CardsArray";

class Game {
	flipped = 0;
	flippedArray = [];
	cardEqual = false;
	currentImage;

	constructor() {
		makeAutoObservable(this, {});
	}

	startGame = (id) => {
		this.flippedArray.push(id);
		this.currentImage = CardsArray.filter((card) => card.id === id).map(
			(card) => card.img
		);

		if (
			this.flippedArray.length === 2 &&
			this.flippedArray[0] !== this.flippedArray[1]
		) {
			console.log("Not Match");
			this.flippedArray = [];
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
