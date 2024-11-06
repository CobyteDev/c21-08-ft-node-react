import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Facturation {
  @PrimaryGeneratedColumn("uuid")
  facturationId!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @OneToOne(() => User, (user) => user.facturation)
  @JoinColumn({ name: "user" })
  user!: User;
}
