var frameTimeCurrent = 0;

class Sprites {
    constructor(canvasWidth, canvasHeight, img, scale, spW, spH, spX, spY, maxFr, dX, dY) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.image = img;
        this.spriteWidth = spW;
        this.spriteHeight = spH;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.scale = scale;
        this.x = spX;
        this.y = spY;
        this.minFrame = 0;
        this.maxFrame = maxFr;
        this.frameCount = 0;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frameTime = 3;
        this.mX = dX;
        this.mY = dY;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
             this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
    update() {
        frameTimeCurrent -= 16;
        this.frameCount++;
        if(frameTimeCurrent <= 0) {
            frameTimeCurrent += this.frameTime;
            
        }
        if(this.frameCount > this.frameTime) {
            this.frameCount = 0;
            if(this.frame < this.maxFrame - 1) {
                this.frame++;
            } else {
                this.frame = 0;
            }
        }
        this.frameX = this.frame % this.mX;
        this.frameY = Math.floor(this.frame / this.mY);
    }
    clear(context) {
        context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
}