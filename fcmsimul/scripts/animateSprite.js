var frameTimeCurrent = 0;

class Sprites {
    constructor(canvasWidth, canvasHeight, img, scale, spX, spY, maxFr, dX, dY) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.image = img;
        this.spriteWidth = 64;
        this.spriteHeight = 64;
        this.width = this.spriteWidth;
        this.height = this.spriteHeight;
        this.scale = scale;
        this.x = spX;
        this.y = spY;
        this.minFrame = 0;
        this.maxFrame = maxFr;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frameTime = 40;
        this.mX = dX;
        this.mY = dY;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
             this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
    update() {
        frameTimeCurrent -= 16;
        if(frameTimeCurrent <= 0) {
            frameTimeCurrent += sprite.frameTime;
            if(this.frame < 80) this.frame++;
            else this.frame = this.minFrame;
            this.frameX = this.frame % this.mX;
            this.frameY = Math.floor(this.frame / this.mY);
        }
    }
    clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}