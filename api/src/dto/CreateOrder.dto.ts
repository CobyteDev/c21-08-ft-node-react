import { IsString, IsBoolean, IsEnum } from "class-validator";
import { MethodOfPayment } from "../common/methodOfPayment.enum";

export class CreateOrderDto {
  @IsString()
  userId!: string;

  @IsBoolean()
  delivery!: boolean;

  @IsEnum(MethodOfPayment)
  methodOfPayment!: MethodOfPayment;
}
