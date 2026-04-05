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
import { UserRole } from 'src/core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { MatchesAdminService } from '../../services/admin/matches.admin.service';
import { MatchListAdminDto } from '../../dtos/admin/match.list.admin.dto';
import { MatchCreateAdminDto } from '../../dtos/admin/match.create.admin.dto';
import { MatchUpdateAdminDto } from '../../dtos/admin/match.update.admin.dto';


@ApiTags('Admin / Matches')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/matches')
export class MatchesAdminController {
  constructor(private readonly service: MatchesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => MatchListAdminDto, isArray: true })
  getAll(): Promise<MatchListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => MatchListAdminDto })
  getOne(@Param('id') id: number): Promise<MatchListAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => MatchListAdminDto })
  create(@Body() payload: MatchCreateAdminDto): Promise<MatchListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => MatchListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: MatchUpdateAdminDto,
  ): Promise<MatchListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
