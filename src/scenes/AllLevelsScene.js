import "phaser";

export class AllLevelsScene extends Phaser.Scene {
	constructor() {
		super({ key: "AllLevelsScene" });
	}

	preload() {
        this.load.image("level1", "assets/choose level/01.png")
        this.load.image("level2", "assets/choose level/02.png")
        this.load.image("level3", "assets/choose level/03.png")
        this.load.image("level4", "assets/choose level/04.png")
        this.load.image("level5", "assets/choose level/05.png")
	}

	create() {
        const return_text = this.add.text(this.scale.canvas.width / 2, 50, "TORNA AL MENU", {
			fontFamily: "ThaleahFat",
			fontSize: "30px",
			color: "#FFD700",
            align: "center",
            stroke: "#000000",
			strokeThickness: 5,
		});
		return_text.setOrigin(0.5, 0.5);
        return_text.setInteractive();
        return_text.on("pointerdown", () => {
            this.scene.start("StartScene");
        });

        this.add.text(this.scale.canvas.width / 2, 100, "SCEGLI IL LIVELLO", {
			fontFamily: "ThaleahFat",
			fontSize: "50px",
			color: "#ffffff",
            align: "center",
            stroke: "#000000",
			strokeThickness: 5,
		}).setOrigin(0.5, 0.5);

        const level1 = this.add.image(130, 220, "level1");
        level1.setInteractive();
        level1.on("pointerdown", () => {
            this.scene.start("Level1");
        });
        this.add.text(level1.x, level1.y + 60, "LIVELLO 1", {
            fontFamily: "ThaleahFat",
            fontSize: "32px",
            color: "#ffffff",
            align: "center",
        }).setOrigin(0.5, 0.5).postFX.addGlow(0x00FF00, 0.5, 0.7);

        const level2 = this.add.image(this.scale.canvas.width / 2, 220, "level2");
        level2.setInteractive();
        level2.on("pointerdown", () => {
            this.scene.start("Level2");
        });
        this.add.text(level2.x, level2.y + 60, "LIVELLO 2", {
            fontFamily: "ThaleahFat",
            fontSize: "32px",
            color: "#ffffff",
            align: "center",
        }).setOrigin(0.5, 0.5).postFX.addGlow(0x00BFFF, 0.5, 0.7);

        const level3 = this.add.image(this.scale.canvas.width / 1.3, 220, "level3");
        level3.setInteractive();
        level3.on("pointerdown", () => {
            this.scene.start("Level3");
        });
        this.add.text(level3.x, level3.y + 60, "LIVELLO 3", {
            fontFamily: "ThaleahFat",
            fontSize: "32px",
            color: "#ffffff",
            align: "center",
        }).setOrigin(0.5, 0.5).postFX.addGlow(0xAA7700, 0.5, 0.7);

        const level4 = this.add.image(this.scale.canvas.width / 2.8, 370, "level4");
        level4.setInteractive();
        level4.on("pointerdown", () => {
            this.scene.start("Level4");
        });
        this.add.text(level4.x, level4.y + 60, "LIVELLO 4", {
            fontFamily: "ThaleahFat",
            fontSize: "32px",
            color: "#ffffff",
            align: "center",
        }).setOrigin(0.5, 0.5).postFX.addGlow(0xFF0000, 0.5, 0.7);

        const level5 = this.add.image(this.scale.canvas.width / 1.5, 370, "level5");
        level5.setInteractive();
        level5.on("pointerdown", () => {
            this.scene.start("Level5");
        });
        this.add.text(level5.x, level5.y + 60, "LIVELLO 5", {
            fontFamily: "ThaleahFat",
            fontSize: "32px",
            color: "#ffffff",
            align: "center",
        }).setOrigin(0.5, 0.5).postFX.addGlow(0xFF00FF, 0.5, 0.7);

	}
}
