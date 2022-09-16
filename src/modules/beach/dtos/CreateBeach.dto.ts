import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBeachDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  lat: number;
  @IsNotEmpty()
  @IsNumber()
  lng: number;
  @IsNotEmpty()
  @IsString()
  position: string;
}
