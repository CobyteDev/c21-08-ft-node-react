import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  categoryId!: string;

  @Column()
  categoryName!: string;

  @Column()
  categoryLabel!: string;

  @Column({ type: "boolean", default: false })
  featured!: boolean;

  @OneToMany(() => Product, (product) => product.category)
  product!: Product[];
}
