import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderStatus } from "../common/orderStatus.enum";
import { OrderProduct } from "./OrderProduct.entity";
import { User } from "./User.entity";
import { Payment } from "./Payment.entity";
import { MethodOfPayment } from "../common/methodOfPayment.enum";

@Entity()
export class ClientOrder {
  @PrimaryGeneratedColumn("uuid")
  clientOrderId!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @Column({ default: false })
  isConfirmed!: boolean;

  @Column()
  delivery!: boolean;

  @Column({ type: "enum", enum: MethodOfPayment })
  methodOfPayment!: MethodOfPayment;

  @Column({ type: "enum", enum: OrderStatus, default: OrderStatus.UNPREPARED })
  status!: OrderStatus;

  @ManyToOne(() => User, (user) => user.order)
  @JoinColumn({ name: "user" })
  user!: User;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.clientOrder)
  orderProduct!: OrderProduct[];

  @OneToMany(() => Payment, (payment) => payment.clientOrder)
  payment!: Payment[];
}
