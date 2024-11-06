import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { PaymentStatus } from "../common/paymentStatus.enum";
import { ClientOrder } from "./ClientOrder.entity";

@Entity()
export class Payment {
  @PrimaryColumn()
  paymentId!: string;

  @Column()
  amount!: number;

  @Column({ type: "enum", enum: PaymentStatus, default: PaymentStatus.PROCESS })
  status!: PaymentStatus;

  @ManyToOne(() => ClientOrder, (clientOrder) => clientOrder.payment)
  @JoinColumn({ name: "clientOrder" })
  clientOrder!: ClientOrder;
}
