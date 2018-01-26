import * as mongoose from 'mongoose';
import {DocumentQuery, ModelPopulateOptions} from 'mongoose';

export class MongooseBase<T extends mongoose.Document> {
  public static mongooseSchema: mongoose.Schema;
  public static staticModel: mongoose.Model<any>;
  public static defaultPopulate: ModelPopulateOptions[] = [{path: 'createdBy'}];
  private static mongooseModel: mongoose.Model<any>;

  constructor() {
  }

  protected _model: mongoose.Model<T>;

  get model(): mongoose.Model<T> {
    return this._model;
  }

  private _population: ModelPopulateOptions[] = [];

  get population(): ModelPopulateOptions[] {
    return this._population;
  }

  protected static addToDefaultPopulate(param: ModelPopulateOptions) {
    MongooseBase.defaultPopulate.push(param);
  }

  public addToPopulate(param: ModelPopulateOptions) {
    this._population.push(param);
  }

  protected find(obj: {}, callback: (err: any, res: T[]) => void) {
    return this._model.find(obj).populate(MongooseBase.defaultPopulate);
  }



  private clearPopulate() {
    this._population = [];
  }
}
