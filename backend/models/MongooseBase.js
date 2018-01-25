"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongooseBase {
    constructor() {
        this._population = [];
    }
    get model() {
        return this._model;
    }
    get population() {
        return this._population;
    }
    static addToDefaultPopulate(param) {
        MongooseBase.defaultPopulate.push(param);
    }
    addToPopulate(param) {
        this._population.push(param);
    }
    find(obj, callback) {
        return this._model.find(obj).populate(MongooseBase.defaultPopulate);
    }
    findById(id, callback) {
        return this._model.findById(id).populate(MongooseBase.defaultPopulate);
    }
    clearPopulate() {
        this._population = [];
    }
}
MongooseBase.defaultPopulate = [{ path: 'createdBy' }];
exports.MongooseBase = MongooseBase;
//# sourceMappingURL=MongooseBase.js.map