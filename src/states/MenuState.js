class MenuState extends Phaser.State
{
    preload() {}

	create()
    {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');

        this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'arrow');
        this.arrow.anchor.setTo(0.5);

        this.arrow.inputEnabled = true;
        this.arrow.input.pixelPerfectClick = true;
        this.arrow.events.onInputDown.add(this.startPlay, this);
	}

    startPlay()
    {
        this.game.state.start('PlayState');
    }

}

export default MenuState;
