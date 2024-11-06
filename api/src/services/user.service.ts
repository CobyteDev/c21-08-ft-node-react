import bcrypt from "bcryptjs";
import { User } from "../entities/User.entity";
import { UserException } from "../exceptions/UserException";
import { userRepository } from "../repositories/user.repository";

export class UserService {
  async getAllUsers(): Promise<User[]> {
    try {
      return await userRepository.find();
    } catch (error) {
      throw new UserException("Error getting all users", 500);
    }
  }

  async getUserById(userId: string): Promise<User> {
    try {
      const user: User | null = await userRepository.findOne({
        where: { userId },
      });

      if (!user) {
        throw new UserException(
          "Error getting user by id: user not found",
          400
        );
      }
      return user;
    } catch (error) {
      if (error instanceof UserException) {
        throw error;
      }
      throw new UserException("Error getting user by id", 500);
    }
  }

  async register(name: string, email: string, password: string) {
    try {
      const existingUser = await userRepository.findOne({ where: { email } });
      if (existingUser) {
        throw new UserException("El usuario ya existe.", 401);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User();
      user.name = name;
      user.email = email;
      user.password = hashedPassword;

      await userRepository.save(user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        throw new UserException("Credenciales incorrectas.", 401);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UserException("Credenciales incorrectas.", 401);
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
}
