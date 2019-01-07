var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Plane
         */
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._checkBounds = function () {
            // check right boundary
            if (this.y > config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            // check left boundary
            if (this.y < this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // public methods
        Plane.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = 120;
            this._fireSpan = new math.Vec2();
        };
        Plane.prototype.Update = function () {
            this.y = managers.Game.Stage.mouseY;
            this._checkBounds();
            this.Dracrays();
        };
        Plane.prototype.Dracrays = function () {
            var ticker = createjs.Ticker.getTicks();
            if ((ticker % 10 == 0) && (managers.Game.keyboardManager.fire)) {
                this._fireSpan = new math.Vec2(this.x, this.y);
                var currentfire = managers.Game.fireManager.Currentfire;
                var dragfire = managers.Game.fireManager.fires[currentfire];
                dragfire.x = this._fireSpan.x + 5;
                dragfire.y = this._fireSpan.y;
                managers.Game.fireManager.Currentfire++;
                if (managers.Game.fireManager.Currentfire > 49) {
                    managers.Game.fireManager.Currentfire = 0;
                }
                console.log("bulletFired");
            }
        };
        Plane.prototype.Reset = function () { };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map