import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Measurement } from "../common/measurement.enum";
import { User } from "./User.entity";

@Entity()
export class Product {
  @PrimaryColumn("uuid")
  productId!: string;

  @Column()
  name!: string;

  @Column()
  price!: number;

  @Column({ type: "enum", enum: Measurement, default: Measurement.UNITARY })
  unitOfMeasurement!: string;

  @Column()
  description!: string;

  @Column()
  stock!: number;

  @ManyToMany(() => User, (user) => user.product)
  @JoinTable({
    name: "favorite",
    joinColumn: {
      name: "product",
      referencedColumnName: "productId",
    },
    inverseJoinColumn: {
      name: "user",
      referencedColumnName: "userId",
    },
  })
  user!: User[];
}
