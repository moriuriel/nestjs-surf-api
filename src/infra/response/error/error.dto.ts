import { ApiProperty } from '@nestjs/swagger';

class ErrorResponseDto {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  error: string;
}

export class ErrorDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  response: ErrorResponseDto;
}
