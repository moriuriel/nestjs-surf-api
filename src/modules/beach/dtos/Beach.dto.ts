import { SuccessResponseDto } from '@/infra/response/success/SucessResponse.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { GeoPosition } from '../domain/enums/GeoPeosition.enum';

export class BeachDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  lat: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  lng: number;
  @ApiProperty({ enum: GeoPosition })
  @IsNotEmpty()
  @IsString()
  @IsEnum(GeoPosition)
  position: GeoPosition;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  favorite: boolean;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  rating: number;
}

export class BeachesResponseDto extends SuccessResponseDto {
  @ApiProperty({ isArray: true, type: BeachDto })
  data: BeachDto[];
}

export class BeachResponseDto extends SuccessResponseDto {
  @ApiProperty()
  data: BeachDto;
}
