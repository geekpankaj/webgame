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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Play.prototype._buildClouds = function () {
            for (var count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
            }
        };
        // public methods
        Play.prototype.Start = function () {
            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            this._fireManger = new managers.Fire();
            managers.Game.fireManager = this._fireManger;
            // creates an empty array of type Cloud
            this._clouds = new Array();
            this._cloudNum = 4;
            this._buildClouds();
            this._keyboardManager = new managers.Keyboard();
            managers.Game.keyboardManager = this._keyboardManager;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._plane.Update();
            this._ocean.Update();
            this._fireManger.Update();
            this._clouds.forEach(function (cloud) {
                cloud.Update();
                managers.Collision.check(_this._plane, cloud);
            });
            this._fireManger.fires.forEach(function (fires) {
                fires.Update();
                _this._clouds.forEach(function (cloud) {
                    managers.Collision.check(cloud, fires);
                });
            });
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            var _this = this;
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            // adding the plane to the scene
            this.addChild(this._plane);
            this._fireManger.fires.forEach(function (fire) {
                _this.addChild(fire);
            });
            // adding the cloud to the scene
            for (var _i = 0, _a = this._clouds; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map