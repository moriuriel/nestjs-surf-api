import { Response as ExpressResponse } from 'express';
import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';
import { CreateChampionshipDto } from '../../dtos/CreateChampionship.dto';
import { CreateChampionshipService } from '../../services/CreateChampionship.service';

@Controller('/championships')
export class ChampionshipController {
  constructor(
    private readonly createChampionshipService: CreateChampionshipService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateChampionshipDto,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const { beach_id, event_date, name } = body;

    const championship = await this.createChampionshipService.execute({
      beach_id,
      event_date,
      name,
    });

    return response.status(HttpStatus.CREATED).json(championship);
  }
}
