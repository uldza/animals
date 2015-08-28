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

        this.load.image('background', 'images/background.png');
        // Load animals
        this.load.image('chicken', 'images/chicken.png');
        this.load.image('horse', 'images/horse.png');
        this.load.image('pig', 'images/pig.png');
        this.load.image('sheep', 'images/sheep3.png');
        // Load arrow
        this.load.image('arrow', 'images/arrow.png');
        // TODO load more assets
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
