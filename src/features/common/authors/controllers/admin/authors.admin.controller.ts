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
import { UserRole } from '../../../../auth/auth/entities/auth.entity';
import { AuthorsAdminService } from '../../services/admin/authors.admin.service';
import { AuthorsListAdminDto } from '../../dtos/admin/authors.list.admin.dto';
import { AuthorsCreateAdminDto } from '../../dtos/admin/authors.create.admin.dto';
import { AuthorsUpdateAdminDto } from '../../dtos/admin/authors.update.admin.dto';
import { Roles } from '../../../../../core/decorators/roles.decorator';


@ApiTags('Admin / Authors')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/authors')
export class AuthorsAdminController {
  constructor(private readonly authorsAdminService: AuthorsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => AuthorsListAdminDto, isArray: true })
  getAll(): Promise<AuthorsListAdminDto[]> {
    return this.authorsAdminService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => AuthorsListAdminDto })
  getOne(@Param('id') id: number): Promise<AuthorsListAdminDto> {
    return this.authorsAdminService.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => AuthorsListAdminDto })
  create(@Body() payload: AuthorsCreateAdminDto): Promise<AuthorsListAdminDto> {
    return this.authorsAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => AuthorsListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: AuthorsUpdateAdminDto,
  ): Promise<AuthorsListAdminDto> {
    return this.authorsAdminService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.authorsAdminService.delete(id);
  }
}
