import RainbowText from '../objects/RainbowText';

class PlayState extends Phaser.State {
    create()
    {
        this.background = this.game.add.sprite(0, 0, 'background');

        let animalData = [
            {key: 'chicken', text: 'CHICKEN', audio: 'chickenSound'},
            {key: 'horse', text: 'HORSE', audio: 'horseSound'},
            {key: 'pig', text: 'PIG', audio: 'pigSound'},
            {key: 'sheep', text: 'SHEEP', audio: 'sheepSound'}
        ];

        this.animals = this.game.add.group();

        let self = this;
        let animal;

        animalData.forEach(function(element){
            //create each animal and put it in the group
            animal = self.animals.create(-1000, self.game.world.centerY, element.key, 0);

            //I'm saving everything that's not Phaser-related in a custom property
            animal.customParams = {text: element.key, sound: self.game.add.audio(element.audio)};

            //anchor point set to the center of the sprite
            animal.anchor.setTo(0.5);

            //create animal animation
            animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);

            //enable input so we can touch it
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(self.animateAnimal, self);
        });

        //place current animal in the middle
        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);

        //show animal text
        this.showText(this.currentAnimal);

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
        if(this.isMoving) {
            return false;
        }

        this.isMoving = true;

        this.animalText.visible = false;

        let newAnimal, endX;

        if(sprite.customParams.direction > 0)
        {
            newAnimal = this.animals.next();
            newAnimal.x = -newAnimal.width/2;
            endX = 640 + this.currentAnimal.width/2;
        }
        else
        {
            newAnimal = this.animals.previous();
            newAnimal.x = 640 + newAnimal.width/2;
            endX = -this.currentAnimal.width/2;
        }

        //tween animations, moving on x
        let newAnimalMovement = this.game.add.tween(newAnimal);

        newAnimalMovement.to({ x: this.game.world.centerX }, 1000);

        newAnimalMovement.onComplete.add( () => {
            this.isMoving = false;
            this.showText(newAnimal);
        }, this);

        newAnimalMovement.start();

        let currentAnimalMovement = this.game.add.tween(this.currentAnimal);
        currentAnimalMovement.to({ x: endX }, 1000);
        currentAnimalMovement.start();

        this.currentAnimal = newAnimal;
    }

    showText(animal)
    {
        if(!this.animalText) {
            let style = {
                font: 'bold 30pt Arial',
                fill: '#D0171B',
                align: 'center'
            };

            this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, '', style);
            this.animalText.anchor.setTo(0.5);
        }

        this.animalText.setText(animal.customParams.text);
        this.animalText.visible = true;
    }

    animateAnimal(sprite, event)
    {
        sprite.play('animate');
        sprite.customParams.sound.play();
    }
}

export default PlayState;
