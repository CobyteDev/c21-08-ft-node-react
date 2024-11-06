export class ProductException extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    // Establecer el nombre de la clase como el nombre del error
    this.name = this.constructor.name;

    // Capturar el stack trace, excluyendo este constructor
    Error.captureStackTrace(this, this.constructor);

    this.statusCode = statusCode;

    // Necesario para heredar correctamente de la clase Error
    Object.setPrototypeOf(this, ProductException.prototype);
  }
}
