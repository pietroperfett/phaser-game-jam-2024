import "phaser";

export class StoryScene extends Phaser.Scene {
	constructor() {
		super({ key: "StoryScene" });
	}

	preload() {
        // no grazie
	}

	create() {
		const screenWidth = this.scale.canvas.width;

		const storyText = "In questo gioco interpreterai Alan Turing, un genio matematico, informatico e crittografo, determinato a cambiare il corso della storia. La Seconda Guerra Mondiale e' in pieno svolgimento e gli Alleati hanno bisogno del tuo aiuto per vincere. Dovrai raccogliere le macchine Enigma nascoste nei vari livelli, prima che sia troppo tardi.";

		const textStyle = {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#ffffff", // ADFF2F
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
			wordWrap: { width: screenWidth - 20, useAdvancedWrap: true }
		};

		const storyTextObject = this.add.text(screenWidth / 2, 245, storyText, textStyle)
			.setOrigin(0.5, 0.5) 
			.setWordWrapWidth(screenWidth - 40); 

        const returnText = this.add.text(screenWidth / 2, 60, "TORNA AL MENU", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#FFD700", // FFA500
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

		const sitoText = this.add.text(screenWidth / 2, 420, "maggiori informazioni sulla storia nella pagina web!", {
			fontFamily: "ThaleahFat",
			fontSize: "20px",
			color: "#ffffff",
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