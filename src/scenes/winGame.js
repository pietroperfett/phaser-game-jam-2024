import "phaser";

export class winGame extends Phaser.Scene {
	constructor() {
		super({ key: "winGame" });
	}

	preload() {
		this.load.image("win_px", "assets/victory_px.png");
		this.load.audio("end_game_music", "assets/sounds/WIN_THE_GAME.wav");
	}

	create() {
		
		this.sound.add("end_game_music").play();

		const bg = this.add.image(
			this.scale.width / 2,
			this.scale.height / 2,
			"win_px"
		);
		bg.setScale(0.4);

		const screenWidth = this.scale.canvas.width;

		const storyText = "hai superato i livelli e raccolto le macchine enigma che avrebbero lasciato perplessi persino il piu' astuto dei crittografi. La tua abilita' e dedizione hanno portato alla vittoria in questa straordinaria guerra di logica e strategia. hai aiutato gli alleati a vincera la guerra.";

		const textStyle = {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#ffffff", // ADFF2F
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
			wordWrap: { width: screenWidth - 20, useAdvancedWrap: true }
		};

		const storyTextObject = this.add.text(screenWidth / 2, 220, storyText, textStyle)
			.setOrigin(0.5, 0.5) 
			.setWordWrapWidth(screenWidth - 40); 
			
			const return1Text = this.add.text(screenWidth / 2, 40, "Congratulazioni!", {
			fontFamily: "ThaleahFat",
			fontSize: "50px",
			color: "#FFD700", // FFA500
			align: "center",
			stroke: "#000000",
			strokeThickness: 8,
		}).setOrigin(0.5, 0.5);

        const returnText = this.add.text(screenWidth / 2, 395, "TORNA AL MENU", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#FFD700", // FFA500
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

		returnText.setInteractive();
		returnText.on("pointerdown", () => {
			this.scene.start("StartScene");
		});
	}
}