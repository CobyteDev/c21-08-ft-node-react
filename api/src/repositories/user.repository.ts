import { User } from "../entities/User.entity";
import { AppDataSource } from "../data-source";

export const userRepository = AppDataSource.getRepository(User);
