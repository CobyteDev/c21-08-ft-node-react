import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn("uuid")
  promotionId!: string;

  @Column("decimal", { precision: 5, scale: 2 })
  percentage!: number;

  @OneToMany(() => Product, (product) => product.promotion)
  product!: Product[];
}
