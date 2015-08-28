class MenuState extends Phaser.State
{
    preload() {}

	create()
    {
        this.background = this.game.add.sprite(0, 0, 'background');
        this.game.state.start('PlayState');
	}

}

export default MenuState;
