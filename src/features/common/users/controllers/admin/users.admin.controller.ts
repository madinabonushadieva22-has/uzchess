import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { UsersAdminService } from '../../services/admin/users.admin.service';
import { UserListAdminDto } from '../../dtos/admin/users.list.admin.dto';
import { UserUpdateAdminDto } from '../../dtos/admin/user.update.admin.dto';


@ApiTags('Admin / Users')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/users')
export class UsersAdminController {
  constructor(private readonly usersAdminService: UsersAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => UserListAdminDto, isArray: true })
  getAll(): Promise<UserListAdminDto[]> {
    return this.usersAdminService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => UserListAdminDto })
  getOne(@Param('id') id: number): Promise<UserListAdminDto> {
    return this.usersAdminService.getOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => UserListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: UserUpdateAdminDto,
  ): Promise<UserListAdminDto> {
    return this.usersAdminService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.usersAdminService.delete(id);
  }
}
