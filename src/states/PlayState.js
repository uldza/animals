import RainbowText from '../objects/RainbowText';

class PlayState extends Phaser.State
{
	create()
    {
        this.background = this.game.add.sprite(0, 0, 'background');
	}

}

export default PlayState;
