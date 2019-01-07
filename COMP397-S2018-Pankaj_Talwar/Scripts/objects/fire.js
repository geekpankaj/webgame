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
    var fires = /** @class */ (function (_super) {
        __extends(fires, _super);
        function fires() {
            var _this = _super.call(this, "fire") || this;
            _this.Start();
            return _this;
        }
        fires.prototype.Start = function () {
            this._dx = 5;
            this._dy = 0;
            this.Reset();
        };
        fires.prototype.Update = function () {
            this.x += this._dx;
            this.CheckBounds();
        };
        fires.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        fires.prototype.CheckBounds = function () {
            if (this.x >= 800) {
                this.Reset();
            }
        };
        return fires;
    }(objects.GameObject));
    objects.fires = fires;
})(objects || (objects = {}));
//# sourceMappingURL=fire.js.map