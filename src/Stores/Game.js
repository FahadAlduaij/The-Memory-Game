import { makeObservable, observable, makeAutoObservable } from "mobx";
import CardsArray from "../CardsArray";

class Game {
	flippedTime = 0;
	flippedImage = [];
	isItEqual = false;
	currentImage;

	constructor() {
		makeAutoObservable(this, {});
	}

	startGame = (id) => {
		this.flippedImage.push(id);
		this.currentImage = CardsArray.filter((card) => card.id === id).map(
			(card) => card.img
		);

		if (
			this.flippedImage.length === 2 &&
			this.flippedImage[0] !== this.flippedImage[1]
		) {
			console.log("Not Match");
			this.flippedArray = [];
		} else if (
			this.flippedImage.length === 2 &&
			this.flippedImage[0] === this.flippedImage[1]
		) {
			console.log(`Match`);
			this.flippedArray = [];
		}
	};
}

const game = new Game();
export default game;
