import { AllLevelsScene } from "./scenes/AllLevelsScene";
import { CreditsScene } from "./scenes/CreditsScene";
import { GameOverScene } from "./scenes/GameOverScene";
import { winGame } from "./scenes/winGame";
import { Level1 } from "./scenes/Level1";
import { Level2 } from "./scenes/Level2";
import { Level3 } from "./scenes/Level3";
import { Level4 } from "./scenes/Level4";
import { Level5 } from "./scenes/Level5";
import { StartScene } from "./scenes/StartScene";
import { StoryScene } from "./scenes/StoryScene";

// game configuration
let config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 540,
	height: 480,
	physics: {
		default: "arcade",
		arcade: {
			gravity: {
				y: 300,
			},
			debug: false,
		},
	},
	backgroundColor: "#1D2B53",
	scene: [StartScene, AllLevelsScene, Level1, Level2, Level3, Level4, Level5, CreditsScene, StoryScene, winGame, GameOverScene],
	scale: {
		autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
	},
	audio: {
		disableWebAudio: false,
	}
};

export const game = new Phaser.Game(config);
