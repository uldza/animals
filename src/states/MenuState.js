class MenuState extends Phaser.State
{
    preload() {}

	create()
    {
        this.background = this.game.add.sprite(0, 0, 'background');

        this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'arrow');
        this.arrow.anchor.setTo(0.5);

        this.arrow.inputEnabled = true;
        this.arrow.input.pixelPerfectClick = true;
        this.arrow.events.onInputDown.add(this.startPlay, this);

        let style = {
            font: 'bold 15pt Arial',
            fill: '#ffffff',
            align: 'center'
        };

        this.startText = this.game.add.text(this.game.width/2 - 10, this.game.height/2, '', style);
        this.startText.anchor.setTo(0.5);

        this.startText.setText('start');
	}

    startPlay()
    {
        this.game.state.start('PlayState');
    }

}

export default MenuState;
