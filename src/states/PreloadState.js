class PreloadState extends Phaser.State
{
    constructor()
    {
        super();
        this.ready = false;
    }

    preload()
    {
        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

        // Load background
        this.load.image('background', 'images/background.png');

        // Load animals
        this.load.spritesheet('chicken', 'images/chicken_spritesheet.png', 131, 200, 3);
        this.load.spritesheet('horse', 'images/horse_spritesheet.png', 212, 200, 3);
        this.load.spritesheet('pig', 'images/pig_spritesheet.png', 297, 200, 3);
        this.load.spritesheet('sheep', 'images/sheep_spritesheet.png', 244, 200, 3);

        // Load arrow
        this.load.image('arrow', 'images/arrow.png');

        // Load sounds
        this.load.audio('chickenSound', ['audio/chicken.ogg', 'audio/chicken.mp3']);
        this.load.audio('horseSound', ['audio/horse.ogg', 'audio/horse.mp3']);
        this.load.audio('pigSound', ['audio/pig.ogg', 'audio/pig.mp3']);
        this.load.audio('sheepSound', ['audio/sheep.ogg', 'audio/sheep.mp3']);
    }

	create()
    {
	}

    update()
    {
        if(!!this.ready)
        {
            this.game.state.start('MenuState');
        }
    }

    onLoadComplete()
    {
        this.ready = true;
    }

}

export default PreloadState;
