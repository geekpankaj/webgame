
 namespace objects {
  export class Cloud extends objects.GameObject {
    // member variables
    private _verticalSpeed: number;
    private _horizontalSpeed: number;

    /**
     * Creates an instance of Cloud.
     * @memberof Cloud
     */
    constructor() {
      super("cloud");

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < -this.width || this.y> config.Screen.HEIGHT + this.height) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      
      this.Reset();
    }

    public Update(): void {
      //this.y += this._verticalSpeed;
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
     // this._verticalSpeed =  Math.floor((Math.random() * 4) + -2); // between 5 and 10 ppf
      this._horizontalSpeed = Math.floor((Math.random() * 3) +1); // between -2 and 2 ppf
      this.x = config.Screen.WIDTH;
      this.y= config.Screen.HALF_HEIGHT-80;
      this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
    }
  }
}
