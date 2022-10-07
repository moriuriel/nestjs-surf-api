import { Response as ExpressResponse } from 'express';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Response,
} from '@nestjs/common';
import {
  CreateBeachDto,
  CreateBeachResponseDto,
} from '../../dtos/CreateBeach.dto';
import {
  FindAllBeachService,
  CreateBeachService,
  FindOneBeachService,
} from '../../services';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BeachesResponseDto, BeachResponseDto } from '../../dtos';
import { ErrorDto } from '@/infra/response/error/error.dto';

@ApiTags('Beaches')
@ApiBadRequestResponse({ type: ErrorDto })
@Controller('/beaches')
export class BeachController {
  constructor(
    private readonly createBeachService: CreateBeachService,
    private readonly findAllBeachService: FindAllBeachService,
    private readonly findOneBeachService: FindOneBeachService,
  ) {}

  @ApiCreatedResponse({ type: CreateBeachResponseDto })
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

  @ApiOkResponse({ type: BeachesResponseDto })
  @Get()
  async index(@Response() response: ExpressResponse): Promise<ExpressResponse> {
    const beachs = await this.findAllBeachService.execute();

    return response.status(HttpStatus.OK).json(beachs);
  }

  @ApiOkResponse({ type: BeachResponseDto })
  @Get(':beachId')
  async find(
    @Param('beachId') beachId: string,
    @Response() response: ExpressResponse,
  ): Promise<ExpressResponse> {
    const beachs = await this.findOneBeachService.execute(beachId);

    return response.status(HttpStatus.OK).json(beachs);
  }
}
