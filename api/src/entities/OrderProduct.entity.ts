import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClientOrder } from "./ClientOrder.entity";
import { Product } from "./Product.entity";

@Entity("order_product")
export class OrderProduct {
  @PrimaryGeneratedColumn("uuid")
  orderProductId!: string;

  @Column()
  quantity!: number;

  @ManyToOne(() => ClientOrder, (clientOrder) => clientOrder, { eager: true })
  @JoinColumn({ name: "clientOrder" })
  clientOrder!: ClientOrder;

  @ManyToOne(() => Product, (product) => product.orderProduct, { eager: true })
  @JoinColumn({ name: "product" })
  product!: Product;
}
