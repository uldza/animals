import RainbowText from '../objects/RainbowText';

class PlayState extends Phaser.State {
    create()
    {
        this.background = this.game.add.sprite(0, 0, 'background');

        let animalData = [
            {key: 'chicken', text: 'CHICKEN'},
            {key: 'horse', text: 'HORSE'},
            {key: 'pig', text: 'PIG'},
            {key: 'sheep', text: 'SHEEP'}
        ];

        this.animals = this.game.add.group();

        let self = this;
        let animal;

        animalData.forEach(function(element){
            //create each animal and put it in the group
            animal = self.animals.create(-1000, self.game.world.centerY, element.key);

            //I'm saving everything that's not Phaser-related in a custom property
            animal.customParams = {text: element.text};

            //anchor point set to the center of the sprite
            animal.anchor.setTo(0.5);

            //enable input so we can touch it
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(self.animateAnimal, self);
        });

        //place current animal in the middle
        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);

        // Arrows
        // left arrow
        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = {direction: -1};

        //left arrow allow user input
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

        //right arrow
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customParams = {direction: 1};

        //right arrow user input
        this.rightArrow.inputEnabled = true;
        this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchAnimal, this);
    }

    update()
    {
    }

    switchAnimal(sprite, event)
    {
        let newAnimal, endX;

        if(sprite.customParams.direction > 0)
        {
            newAnimal = this.animals.next();
            endX = 640 + this.currentAnimal.width/2;
        }
        else
        {
            newAnimal = this.animals.previous();
            endX = -this.currentAnimal.width/2;
        }

        this.currentAnimal.x = endX;
        newAnimal.x = this.game.world.centerX;
        this.currentAnimal = newAnimal;
    }

    animateAnimal()
    {
        console.log('animate');
    }
}

export default PlayState;
