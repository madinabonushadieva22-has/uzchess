import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DifficultiesPublicService } from '../../services/public/difficulties.public.service';
import { DifficultyListPublicDto } from '../../dtos/public/difficulty.list.public.dto';

@ApiTags('Public / Difficulties')
@Controller('public/difficulties')
export class DifficultiesPublicController {
  constructor(
    private readonly difficultiesPublicService: DifficultiesPublicService,
  ) {}

  @Get()
  @ApiOkResponse({ type: () => DifficultyListPublicDto, isArray: true })
  getAll(): Promise<DifficultyListPublicDto[]> {
    return this.difficultiesPublicService.getAll();
  }
}
