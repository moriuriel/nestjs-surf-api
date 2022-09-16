import { Response as ExpressResponse } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Response,
} from '@nestjs/common';
import { CreateBeachDto } from '../../dtos/CreateBeach.dto';
import { FindAllBeachService, CreateBeachService } from '../../services';

@Controller('/beachs')
export class BeachController {
  constructor(
    private readonly createBeachService: CreateBeachService,
    private readonly findAllBeachService: FindAllBeachService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateBeachDto,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const { name, position, lat, lng } = body;

    const beach = await this.createBeachService.execute({
      name,
      position,
      lat,
      lng,
    });

    return response.status(HttpStatus.CREATED).json(beach);
  }

  @Get()
  async index(@Response() response: ExpressResponse): Promise<ExpressResponse> {
    const beachs = await this.findAllBeachService.execute();

    return response.status(HttpStatus.OK).json(beachs);
  }
}
