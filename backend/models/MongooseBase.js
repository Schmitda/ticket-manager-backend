var MongooseBase = (function () {
    function MongooseBase() {
        this._population = [];
    }
    Object.defineProperty(MongooseBase.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MongooseBase.prototype, "population", {
        get: function () {
            return this._population;
        },
        enumerable: true,
        configurable: true
    });
    MongooseBase.addToDefaultPopulate = function (param) {
        MongooseBase.defaultPopulate.push(param);
    };
    MongooseBase.prototype.addToPopulate = function (param) {
        this._population.push(param);
    };
    MongooseBase.prototype.find = function (obj, callback) {
        return this._model.find(obj).populate(MongooseBase.defaultPopulate);
    };
    MongooseBase.prototype.clearPopulate = function () {
        this._population = [];
    };
    MongooseBase.defaultPopulate = [{ path: 'createdBy' }];
    return MongooseBase;
})();
exports.MongooseBase = MongooseBase;
//# sourceMappingURL=MongooseBase.js.map