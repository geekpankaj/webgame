

namespace objects {
  export class Plane extends objects.GameObject {
    private _fireSpan: math.Vec2;
    private _fires:objects.fires;

    /**
     * Creates an instance of Plane.
     * @memberof Plane
     */
    constructor() {
      super("plane");

      this.Start();
    }

    // private methods
    private _checkBounds():void {
        // check right boundary
        if(this.y > config.Screen.HEIGHT - this.halfHeight ) {
            this.y = config.Screen.HEIGHT - this.halfHeight;
        }

        // check left boundary
        if(this.y < this.halfHeight) {
            this.y = this.halfHeight;
        }


    }

    // public methods
    public Start(): void {
        this.regX = this.halfWidth;
        this.regY = this.halfHeight;
       this.x = 120;
       this._fireSpan = new math.Vec2();

    }

    public Update(): void {
        this.y = managers.Game.Stage.mouseY;
        this._checkBounds();
        this.Dracrays();

    }
    public Dracrays(): void {
        let ticker: number = createjs.Ticker.getTicks();
                if ((ticker % 10 == 0) && (managers.Game.keyboardManager.fire)) {
            this._fireSpan = new math.Vec2(this.x, this.y);
            let currentfire = managers.Game.fireManager.Currentfire;

            let dragfire = managers.Game.fireManager.fires[currentfire];
            dragfire.x = this._fireSpan.x+5;
            dragfire.y = this._fireSpan.y;

            managers.Game.fireManager.Currentfire++;


            if (managers.Game.fireManager.Currentfire > 49) {
                managers.Game.fireManager.Currentfire = 0;
            }

            console.log("bulletFired");
        } 
    }

    public Reset(): void {}
  }
}
