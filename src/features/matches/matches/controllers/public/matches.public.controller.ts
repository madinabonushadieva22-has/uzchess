import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MatchesPublicService } from '../../services/public/matches.public.service';
import { MatchListPublicDto } from '../../dtos/public/match.list.public.dto';


@ApiTags('Public / Matches')
@Controller('public/matches')
export class MatchesPublicController {
  constructor(private readonly service: MatchesPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => MatchListPublicDto, isArray: true })
  getAll(): Promise<MatchListPublicDto[]> {
    return this.service.getAll();
  }
}
