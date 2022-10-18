import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { GeoPosition } from '@/modules/beach/domain/enums/GeoPeosition.enum';
import { ApiProperty } from '@nestjs/swagger';
import { SuccessResponseDto } from '@/infra/response/success/SucessResponse.dto';
import { BeachResponseDto } from './Beach.dto';

export class CreateBeachDto {
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

export class CreateBeachResponseDto extends SuccessResponseDto {
  @ApiProperty()
  data: BeachResponseDto;
}
