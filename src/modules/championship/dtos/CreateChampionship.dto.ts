import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateChampionshipDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsDateString()
  event_date: Date;
  @IsNotEmpty()
  @IsUUID()
  beach_id: string;
}
