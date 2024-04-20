import "phaser";

export class CreditsScene extends Phaser.Scene {
	constructor() {
		super({ key: "CreditsScene" });
	}

	preload() {
		this.load.image("noi", "assets/noi.jpg");
	}

	create() {
        const return_text = this.add.text(this.scale.canvas.width / 2, 60, "TORNA AL MENU", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#FFD700", // FFA500
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
		});
		return_text.setOrigin(0.5, 0.5);
        return_text.setInteractive();
        return_text.on("pointerdown", () => {
            this.scene.start("StartScene");
        });

        this.add.text(this.scale.canvas.width / 2, 100, "IL GIOCO E' STATO CREATO DA:", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#ffffff",
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

		this.add.text(this.scale.canvas.width / 3.4, 200, "PIETRO\nSEBASTIANO\nRAFFAELE\nALESSANDRO\nPAOLO\n", {
			fontFamily: "ThaleahFat",
			fontSize: "25px",
			color: "#ffffff",
            align: "left",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

		this.add.text(this.scale.canvas.width / 2, 290, "un ringraziamento speciale \nva ai nostri docenti:", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#ffffff",
			align: "center",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

		this.add.text(this.scale.canvas.width / 3.4, 350, "Daniele\nMaddalena", {
			fontFamily: "ThaleahFat",
			fontSize: "25px",
			color: "#ffffff",
            align: "left",
			stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

	}
}
