import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { UserRole } from '../../../../auth/auth/entities/auth.entity';
import { LanguageAdminService } from '../../services/admin/language.admin.service';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { LanguageListAdminDto } from '../../dtos/admin/languageList.admin.dto';
import { LanguageCreateAdminDto } from '../../dtos/admin/language.create.admin.dto';
import { LanguageUpdateAdminDto } from '../../dtos/admin/language.update.admin.dto';

@ApiTags('Admin / Languages')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/languages')
export class LanguageAdminController {
  constructor(private readonly languageAdminService: LanguageAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => LanguageListAdminDto, isArray: true })
  getAll(): Promise<LanguageListAdminDto[]> {
    return this.languageAdminService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => LanguageListAdminDto })
  getOne(@Param('id') id: number): Promise<LanguageListAdminDto> {
    return this.languageAdminService.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => LanguageListAdminDto })
  create(@Body() payload: LanguageCreateAdminDto): Promise<LanguageListAdminDto> {
    return this.languageAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => LanguageListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: LanguageUpdateAdminDto,
  ): Promise<LanguageListAdminDto> {
    return this.languageAdminService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.languageAdminService.delete(id);
  }
}