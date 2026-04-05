import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PlayersPublicService } from '../../services/public/players.public.service';
import { PlayerListPublicDto } from '../../dtos/public/player.list.public.dto';

@ApiTags('Public / Players')
@Controller('public/players')
export class PlayersPublicController {
  constructor(private readonly service: PlayersPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => PlayerListPublicDto, isArray: true })
  getAll(): Promise<PlayerListPublicDto[]> { return this.service.getAll(); }
}