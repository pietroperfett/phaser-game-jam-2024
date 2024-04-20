import "phaser";

export class GameOverScene extends Phaser.Scene {
	constructor() {
		super({ key: "GameOverScene" });
	}

	preload() {
        this.load.image("lose_px", "assets/lose_px.jpg");
		this.load.audio("end_game_music", "assets/sounds/lose.wav");
	}

	create() {

		this.sound.add("end_game_music").play();

		const bg = this.add.image(
			this.scale.width / 2,
			this.scale.height / 2,
			"lose_px"
		);
		bg.setScale(1);

		const screenWidth = this.scale.canvas.width;

		const storyText = "Non hai superato i livelli, gli alleati non sono riusciti a decifrare i messaggi senza le macchine enigma. hai portato alla sconfitta degli alleati, perdendo la guerra.";

		const textStyle = {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#ffffff", // ADFF2F
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
			wordWrap: { width: screenWidth - 40, useAdvancedWrap: true }
		};

		const storyTextObject = this.add.text(screenWidth / 2, 225, storyText, textStyle)
			.setOrigin(0.5, 0.5) 
			.setWordWrapWidth(screenWidth - 40); 
			
		const return1Text = this.add.text(screenWidth / 2, 70, "GAME OVER!", {
			fontFamily: "ThaleahFat",
			fontSize: "65px",
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