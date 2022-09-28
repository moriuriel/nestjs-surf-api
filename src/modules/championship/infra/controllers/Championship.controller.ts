import { Response as ExpressResponse } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { CreateChampionshipDto } from '../../dtos/CreateChampionship.dto';
import { CreateChampionshipService } from '../../services/CreateChampionship.service';
import { FindAllChampionshipsService } from '../../services';
import {
  GetPagination,
  IPagination,
} from 'src/common/decorators/getPagination';

@Controller('/championships')
export class ChampionshipController {
  constructor(
    private readonly createChampionshipService: CreateChampionshipService,
    private readonly findAllChampionshipsService: FindAllChampionshipsService,
  ) {}

  @Get()
  async index(
    @GetPagination() pagination: IPagination,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const championships = await this.findAllChampionshipsService.execute(
      pagination,
    );

    return response.status(HttpStatus.OK).json(championships);
  }

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
