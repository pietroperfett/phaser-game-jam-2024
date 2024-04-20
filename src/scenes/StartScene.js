import "phaser";

export class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: "StartScene" });
	}

	preload() {
		this.load.image("logo", "assets/logo.png");
		this.load.image("button", "assets/button.png");
		this.load.image("bg_px", "assets/bg_px.png");
		this.load.audio("background_music", "assets/sounds/allgame.wav");
	}

	create() {

		// check if footer not exists
		if (!document.getElementById("footer")) {
			const footer = document.createElement("p");
			footer.id = "footer";
			footer.innerText =
				"";
				// For navigating in the game, use the left and right arrow keys to move your character and the up arrow key to jump. If you need to exit a level, simply move your character in front of the exit door and press the 'Enter' key to leave the level.
			document.getElementsByTagName("body")[0].appendChild(footer);
		}
		if (!this.background_music) {
			this.background_music = this.sound.add("background_music");
			this.background_music.loop = true;
			this.background_music.play();
			this.background_music.setVolume(0.3)
		}

		const bg = this.add.image(
			this.scale.width / 2,
			this.scale.height / 2,
			"bg_px"
		);
		bg.setScale(0.4);

		const logo = this.add.image(this.scale.canvas.width / 2, 120, "logo");
		logo.setScale(0.8);
		logo.postFX.addGlow(0xffffff, 0.8, 0.5);

		// play button
		const play_button = this.add
			.image(this.scale.canvas.width / 2, 235, "button")
			.setScale(0.8);
		play_button.setInteractive();
		play_button.on("pointerdown", () => {
			this.scene.start("AllLevelsScene");
		});
		const play_text = this.add.text(
			play_button.x,
			play_button.y - 10,
			"GIOCA",
			{
				fontFamily: "ThaleahFat",
				fontSize: "60px",
				color: "#ffffff", // FFEB3B
				stroke: "#000000",
				strokeThickness: 5,

			}
		);
		play_text.setOrigin(0.5, 0.5);

		// credits button
		const credits_button = this.add
			.image(this.scale.canvas.width / 2, 335, "button")
			.setScale(0.8);
		credits_button.setInteractive();
		credits_button.on("pointerdown", () => {
			this.scene.start("CreditsScene");
		});
		const credits_text = this.add.text(
			credits_button.x,
			credits_button.y - 10,
			"CREDITI",
			{
				fontFamily: "ThaleahFat",
				fontSize: "60px",
				color: "#ffffff",
				stroke: "#000000",
				strokeThickness: 5,
			}
		);
		credits_text.setOrigin(0.5, 0.5);

		// story button
		const story_button = this.add
			.image(this.scale.canvas.width / 2, 285, "button")
			.setScale(0.8);
		story_button.setInteractive();
		story_button.on("pointerdown", () => {
			this.scene.start("StoryScene");
		});
		const story_text = this.add.text(
			story_button.x,
			story_button.y - 10,
			"STORIA",
			{
				fontFamily: "ThaleahFat",
				fontSize: "60px",
				color: "#ffffff",
				stroke: "#000000",
				strokeThickness: 5,
			}
		);
		story_text.setOrigin(0.5, 0.5);
	}
}
