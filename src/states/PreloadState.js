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
