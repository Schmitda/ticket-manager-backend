export abstract class CustomErrorBuilder extends Error {
  protected type: string;
  public errorMessage: string;
  public port: number;


  constructor(message: string, type: string, port: number = 400) {
    super(message);
    this.errorMessage = message;
    this.type = type;
    this.port = port;
  }
}
