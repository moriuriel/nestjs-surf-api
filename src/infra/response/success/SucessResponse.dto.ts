import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class SuccessResponseDto {
  @ApiProperty()
  @IsString()
  @IsDateString()
  timestamp: string;
  @ApiProperty()
  @IsNumber()
  statusCode: number;
}
