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
import { UserRole } from 'src/features/auth/auth/entities/auth.entity';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { DifficultiesAdminService } from '../../services/admin/difficulties.admin.service';
import { DifficultyListAdminDto } from '../../dtos/admin/difficulty.list.admin.dto';
import { DifficultyCreateAdminDto } from '../../dtos/admin/difficulty.create.admin.dto';
import { DifficultyUpdateAdminDto } from '../../dtos/admin/difficulty.update.admin.dto';



@ApiTags('Admin / Difficulties')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/difficulties')
export class DifficultiesAdminController {
  constructor(
    private readonly difficultiesAdminService: DifficultiesAdminService,
  ) {}

  @Get()
  @ApiOkResponse({ type: () => DifficultyListAdminDto, isArray: true })
  getAll(): Promise<DifficultyListAdminDto[]> {
    return this.difficultiesAdminService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => DifficultyListAdminDto })
  getOne(@Param('id') id: number): Promise<DifficultyListAdminDto> {
    return this.difficultiesAdminService.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => DifficultyListAdminDto })
  create(
    @Body() payload: DifficultyCreateAdminDto,
  ): Promise<DifficultyListAdminDto> {
    return this.difficultiesAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => DifficultyListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: DifficultyUpdateAdminDto,
  ): Promise<DifficultyListAdminDto> {
    return this.difficultiesAdminService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.difficultiesAdminService.delete(id);
  }
}
