var managers;
(function (managers) {
    var Fire = /** @class */ (function () {
        function Fire() {
            this.Start();
        }
        Fire.prototype.Start = function () {
            this._fireCounts = 1000;
            this.fires = new Array();
            this._buildfirePool();
            this.Currentfire = 0;
        };
        Fire.prototype._buildfirePool = function () {
            for (var count = 0; count < this._fireCounts; count++) {
                this.fires[count] = new objects.fires();
            }
        };
        Fire.prototype.Update = function () {
            this.fires.forEach(function (fire) {
                fire.Update();
            });
        };
        return Fire;
    }());
    managers.Fire = Fire;
})(managers || (managers = {}));
//# sourceMappingURL=fire.js.map