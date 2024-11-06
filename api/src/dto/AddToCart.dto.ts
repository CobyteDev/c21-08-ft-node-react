import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Measurement } from "../common/measurement.enum";
import { Category } from "../entities/Category.entity";
import { Promotion } from "../entities/Promotion.entity";

export class AddToCartDto {
  @IsString()
  productId!: string;

  @IsNumber()
  productQty!: number;
}
