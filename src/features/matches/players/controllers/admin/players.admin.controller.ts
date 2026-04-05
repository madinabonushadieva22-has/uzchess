import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { PlayerListAdminDto } from '../../dtos/admin/player.list.admin.dto';
import { PlayersAdminService } from '../../services/admin/players.admin.service';
import { PlayerCreateAdminDto } from '../../dtos/admin/player.create.admin.dto';
import { PlayerUpdateAdminDto } from '../../dtos/admin/player.update.admin.dto';


@ApiTags('Admin / Players')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/players')
export class PlayersAdminController {
  constructor(private readonly service: PlayersAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => PlayerListAdminDto, isArray: true })
  getAll(): Promise<PlayerListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => PlayerListAdminDto })
  getOne(@Param('id') id: number): Promise<PlayerListAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => PlayerListAdminDto })
  create(@Body() payload: PlayerCreateAdminDto): Promise<PlayerListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => PlayerListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: PlayerUpdateAdminDto,
  ): Promise<PlayerListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
