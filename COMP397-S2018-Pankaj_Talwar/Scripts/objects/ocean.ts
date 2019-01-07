namespace objects {
  export class Ocean extends createjs.Bitmap {
    // member variables
    private _verticalSpeed: number;

    /**
     * Creates an instance of Ocean.
     * @memberof Ocean
     */
    constructor() {
      super(managers.Game.AssetManager.getResult("ocean"));

      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check top boundary
      if (this.x <= -3000) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._verticalSpeed = 3; // 5 pixels per frame
      this.Reset();
    }

    public Update(): void {
      this.x -= this._verticalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this.x = 0;
    }
  }
}
