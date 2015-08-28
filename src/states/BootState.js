class BootState extends Phaser.State
{

    preload()
    {
        //here we can preload images for boot
    }

	create()
    {
        this.game.input.maxPointers = 1;
        this.game.state.start('PreloadState');
	}

}

export default BootState;
