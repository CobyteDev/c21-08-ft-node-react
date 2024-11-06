import "reflect-metadata";
import { join } from "path";
import { DataSource } from "typeorm";
import { config } from "dotenv";
config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQLHOST || "mysql",
  port: parseInt(process.env.DB_PORT || "3307"),
  username: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "root",
  database: process.env.MYSQL_DATABASE || "kramer",
  synchronize: true,
  logging: true,
  entities: [join(__dirname, "/**/*.entity{.ts,.js}")],
});
