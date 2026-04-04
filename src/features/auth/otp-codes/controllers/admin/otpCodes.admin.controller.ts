import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../auth/entities/auth.entity';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { OtpCodesAdminService } from '../../services/otpCodes.admin.service';
import { OtpCodesListDto } from '../../dtos/otpCodes.list.dto';


@ApiTags('Admin / OtpCodes')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/otp-codes')
export class OtpCodesAdminController {
  constructor(private readonly otpCodesAdminService: OtpCodesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => OtpCodesListDto, isArray: true })
  getAll(): Promise<OtpCodesListDto[]> {
    return this.otpCodesAdminService.getAll();
  }

  @Delete('user/:userId')
  @ApiOkResponse({ schema: { example: { message: 'Deleted successfully' } } })
  async deleteByUserId(
    @Param('userId') userId: number,
  ): Promise<{ message: string }> {
    await this.otpCodesAdminService.deleteByUserId(userId);
    return { message: 'Deleted successfully' };
  }
}
