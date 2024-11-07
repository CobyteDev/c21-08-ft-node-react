import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import jwt from "jsonwebtoken";
import { UserException } from "../exceptions/UserException";

export class AuthController {
  private userService = new UserService();

  async login(req: Request, res: Response): Promise<any> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new UserException(
          "Debes proporcionar el email y la contraseña.",
          400
        );
      }
      const user = await this.userService.login(email, password);

      const jwtSecretKey: string = process.env.JWT_SECRET_KEY as string;

      if (!jwtSecretKey) {
        throw new Error(
          "JWT_SECRET_KEY is not defined in the environment variables"
        );
      }

      const token = jwt.sign({ user }, jwtSecretKey, {
        expiresIn: "1h",
      });
      return res.status(200).json({ token, user });
    } catch (error) {
      if (error instanceof UserException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async register(req: Request, res: Response): Promise<any> {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw new UserException("Todos los campos son requeridos.", 400);
      }
      await this.userService.register(name, email, password);
      return res
        .status(201)
        .json({ message: "Usuario registrado exitosamente." });
    } catch (error) {
      if (error instanceof UserException) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
