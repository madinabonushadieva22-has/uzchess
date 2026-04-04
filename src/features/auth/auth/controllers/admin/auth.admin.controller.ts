import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthAdminService } from '../../services/admin/auth.admin.service';
import { AuthCreateAdminDto } from '../../dtos/admin/auth.create.admin.dto';
import { AuthLoginAdminDto } from '../../dtos/admin/auth.login.admin.dto';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { UserRole } from '../../entities/auth.entity';

@ApiTags('Admin / Auth')
@Controller('admin/auth')
export class AuthAdminController {
  constructor(private readonly authAdminService: AuthAdminService) {}

  @Post('register')
  @UseGuards(AuthenticationGuard)
  @Roles(UserRole.SUPER_ADMIN)
  @ApiBearerAuth()
  @ApiOkResponse({ schema: { example: { token: 'jwt_token_here' } } })
  register(@Body() payload: AuthCreateAdminDto): Promise<{ token: string }> {
    return this.authAdminService.register(payload);
  }

  @Post('login')
  @ApiOkResponse({ schema: { example: { token: 'jwt_token_here' } } })
  login(@Body() payload: AuthLoginAdminDto): Promise<{ token: string }> {
    return this.authAdminService.login(payload);
  }
}
