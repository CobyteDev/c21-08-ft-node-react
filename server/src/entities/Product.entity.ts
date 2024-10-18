import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Measurement } from "../common/measurement.enum";
import { Category } from "./Category.entity";
import { OrderProduct } from "./OrderProduct.entity";
import { Promotion } from "./Promotion.entity";
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
  unitOfMeasurement!: Measurement;

  @Column()
  description!: string;

  @Column()
  stock!: number;

  @Column({ nullable: true })
  imgUrl!: string;

  @Column({ nullable: true })
  brand!: string;

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

  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn({ name: "category" })
  category!: Category;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.product)
  orderProduct!: OrderProduct[];

  @ManyToOne(() => Promotion, (promotion) => promotion.product, {
    eager: true,
  })
  @JoinColumn({ name: "promotion" })
  promotion!: Promotion;
}
