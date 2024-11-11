import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.entity";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  categoryId!: string;

  @Column()
  categoryName!: string;

  @Column({ unique: true })
  order!: number;

  @Column({ default: "" }) // le asigné un valor predeterminado.
  categoryLabel!: string;

  @Column({ type: "boolean", default: false })
  featured!: boolean;

  @OneToMany(() => Product, (product) => product.category)
  product!: Product[];
}
