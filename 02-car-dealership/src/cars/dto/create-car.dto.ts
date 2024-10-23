import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  // @MinLength(3)
  readonly model: string;

  @IsString()
  readonly year: string;
}
