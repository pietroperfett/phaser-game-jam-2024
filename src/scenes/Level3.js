import "phaser";

export class Level3 extends Phaser.Scene {
	constructor() {
		super({ key: "Level3" });
	}

	preload() {
		this.load.image("bg3", "assets/bg3.png");
		this.load.image("ground", "assets/platform.png");
		this.load.image("ground2", "assets/platform2.png");
		this.load.image("ground3", "assets/platformLVL3.png");
		this.load.image("enigma", "assets/enigma.png");
		this.load.image("exitDoor", "assets/exitDoor.png");
		this.load.spritesheet("alan_walk", "assets/alan_walk.png", {
			frameWidth: 64,
			frameHeight: 48,
		});
		this.load.spritesheet("alan_jump", "assets/alan_jump.png", {
			frameWidth: 64,
			frameHeight: 48,
		});

		this.load.audio("collectEnigmaSound", "assets/sounds/get_enigma.ogg");
		this.load.audio("jump_sound", "assets/sounds/jump.wav");
	}

	create() {
		this.cursors = this.input.keyboard.createCursorKeys();
		this.enterKey = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.ENTER
		);
		this.collectEnigmaSound = this.sound.add("collectEnigmaSound");
		this.jump_sound = this.sound.add("jump_sound")
		const bg3 = this.add.image(
			this.scale.width / 2,
			this.scale.height / 2,
			"bg3"
		);
		bg3.setScale(0.37);
		this.addPlarforms();
		this.addEnigmas();
		this.addPlayerAnimations();
		this.addExitDoor();
		this.addPlayer();
	}

	addExitDoor() {
		this.exitDoor = this.add.image(35, 420, "exitDoor").setScale(0.35);
		this.add
			.text(
				this.exitDoor.x + 3,
				this.exitDoor.y - this.exitDoor.height / 2,
				"",
				{
					fontFamily: "ThaleahFat",
					fontSize: "28px",
					color: "#ffffff",
				}
			)
			.setOrigin(0.5, 0.5);
	}

	addPlarforms() {
		this.platforms = this.physics.add.staticGroup();

		this.platforms
			.create(
				this.scale.canvas.width / 2,
				this.scale.canvas.height,
				"ground"
			)
			.setScale(1.4)
			.setTint(0x21842f)
			.refreshBody();
		this.horizontalPlatform = this.platforms.create(410, 390, "ground2").setTint(0x21842f).setScale(0.6).refreshBody();
		this.platforms.create(250, 330, "ground3").setTint(0x21842f).setScale(0.6).refreshBody();
		this.platforms.create(340, 320, "ground3").setTint(0x21842f).setScale(0.6).refreshBody();
		this.platforms.create(120, 260, "ground2").setTint(0x21842f).setScale(0.6).refreshBody();
		this.platforms.create(-210, 185, "ground3").setTint(0x21842f).setScale(0.6).refreshBody() ;
		this.platforms.create(260, 200, "ground3").setTint(0x21842f).setScale(0.6).refreshBody() ;
		this.platforms.create(410, 130, "ground3").setTint(0x21842f).setScale(0.6).refreshBody() ;
		this.platforms.create(520, 65, "ground3").setTint(0x21842f).setScale(0.6).refreshBody() ;
	}

	addEnigmas() {
		this.enigmas = this.physics.add.group();

		this.enigmas.create(200, 280, "enigma").postFX.addGlow(0x0000FF, 0.5, 0.7);
		this.enigmas.create(515, 25, "enigma").postFX.addGlow(0x0000FF, 0.5, 0.7);;
		this.enigmas.create(300, 120, "enigma").postFX.addGlow(0x0000FF, 0.5, 0.7);;

		this.enigmas.children.each((enigma) => {
			enigma.setScale(0.1);
			enigma.setBounce(0.2);
			enigma.body.setSize(230, enigma.body.height);
			enigma.refreshBody();
		});

		this.physics.add.collider(this.enigmas, this.platforms);
	}

	addPlayer() {
		this.player = this.physics.add
			.sprite(100, 400, "alan_walk");
		this.player.body.setSize(20, this.player.body.height - 5);
		this.player.refreshBody();

		this.player.setBounce(0.2);
		this.player.setCollideWorldBounds(true);
		this.player.anims.play("turn", true);

		this.physics.add.collider(this.player, this.platforms, () => {
			if (this.player.body.touching.down) this.isJumping = false;
		});
		this.physics.add.collider(
			this.enigmas,
			this.player,
			this.collectEnigma,
			null,
			this
		);

		this.isJumping = false;
		this.collectedEnigmas = 0;
		this.add.image(20, 55, "enigma").setScale(0.1);
		this.scoreLabel = this.add
			.text(37, 43, " :0", {
				fontFamily: "ThaleahFat",
				fontSize: "40px",
				stroke: "#000000",
				strokeThickness: 5,
			})
			.setOrigin(0.5, 0.5);

		this.timeSec = 110;
		this.timeText = this.add
			.text(10, 10, `01:50`, {
				fontFamily: "ThaleahFat",
				fontSize: "40px",
				stroke: "#000000",
				strokeThickness: 5,
			})
			.setOrigin(0, 0.5);

		// setInterval for time counter
		this.timeEvent = this.time.addEvent({
			delay: 1000,
			callback: this.onCountdown,
			callbackScope: this,
			loop: true,
		});
	}

	onCountdown() {
		this.timeSec -= 1;
		const seconds = `0${Math.floor(this.timeSec % 60)}`.slice(-2);
		const minutes = `0${Math.floor(this.timeSec / 60)}`.slice(-2);
		this.timeText.text = `${minutes}:${seconds}`;
		if (this.timeSec < 60) this.timeText.style.color = "red";
		if (this.timeSec <= 0)
			this.scene.start("GameOverScene");
	}

	collectEnigma(player, enigma) {
		enigma.destroy();
		this.collectEnigmaSound.play();
		this.collectedEnigmas += 1;
		this.scoreLabel.text = ` :${this.collectedEnigmas}`;

		if (this.collectedEnigmas === 3) {
			setTimeout(() => {
				this.scene.start("Level4");
			}, 1000);
		}
	}

	addPlayerAnimations() {
		this.anims.create({
			key: "walk",
			frames: this.anims.generateFrameNames("alan_walk", {
				start: 0,
				end: 9,
			}),
			frameRate: 15,
			repeat: -1,
		});
		this.anims.create({
			key: "jump",
			frames: [{ key: "alan_jump", frame: 5 }],
			frameRate: 20,
		});
		this.anims.create({
			key: "turn",
			frames: [{ key: "alan_walk", frame: 0 }],
			frameRate: 20,
		});
	}

	update() {
		if (this.cursors.left.isDown) {
			this.player.setVelocityX(-160);
			this.player.flipX = true;

			if (!this.isJumping) this.player.anims.play("walk", true);
		} else if (this.cursors.right.isDown) {
			this.player.setVelocityX(160);
			this.player.flipX = false;

			if (!this.isJumping) this.player.anims.play("walk", true);
		} else {
			this.player.setVelocityX(0);

			if (!this.isJumping) this.player.anims.play("turn");
		}

		if (this.cursors.up.isDown && this.player.body.touching.down) {
			this.isJumping = true;
			this.player.anims.play("jump");
			this.jump_sound.play();
			this.player.setVelocityY(-220);
		}

		const speed = 1; 
		const maxX = 400;
		const minX = 100;

		if (this.horizontalPlatform.x >= maxX) {
			this.horizontalPlatform.flipX = true;
		} else if (this.horizontalPlatform.x <= minX) {
			this.horizontalPlatform.flipX = false;
		}
	
		if (this.horizontalPlatform.flipX) {
			this.horizontalPlatform.x -= speed;
		} else {
			this.horizontalPlatform.x += speed;
		}

		this.horizontalPlatform.body.position.x = this.horizontalPlatform.x-60;

		this.physics.world.collide(this.player, this.platforms);

		if (this.enterKey.isDown) {
			if (Phaser.Math.Distance.Between(this.player.x, this.player.y, this.exitDoor.x, this.exitDoor.y) < 25) {
                this.scene.start("GameOverScene",);
            }
		}
	}
}
