import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "../common/role.enum";
import { Facturation } from "./Facturation.entity";
import { ClientOrder } from "./ClientOrder.entity";
import { Product } from "./Product.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "enum", enum: Role, default: Role.CLIENT })
  role!: Role;

  @OneToOne(() => Facturation, (facturation) => facturation.user)
  facturation!: Facturation;

  @OneToMany(() => ClientOrder, (clientOrder) => clientOrder.user)
  order!: ClientOrder[];

  @ManyToMany(() => Product, (product) => product.user)
  product!: Product[];
}
