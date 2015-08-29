class BootState extends Phaser.State
{

    preload()
    {
        //here we can preload images for boot
    }

	create()
    {
        this.game.stage.backgroundColor = '#89c264';

        this.game.input.maxPointers = 1;

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        document.body.style.backgroundColor = '#89c264';

        //this.game.scale.minWidth = 640/2;
        //this.game.scale.minHeight = 640/2;
        //this.game.scale.maxWidth = 1280;
        //this.game.scale.maxHeight = 720;

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        this.game.state.start('PreloadState');
	}

}

export default BootState;
