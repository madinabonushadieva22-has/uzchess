import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { TermsAdminService } from '../../services/admin/terms.admin.service';
import { TermsUpdateAdminDto } from '../../dtos/admin/terms.update.admin.dto';
import { TermsDetailDto } from '../../dtos/admin/terms.detail.dto'


@ApiTags('Admin / Terms')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/terms')
export class TermsAdminController {
  constructor(private readonly termsAdminService: TermsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => TermsDetailDto })
  get(): Promise<TermsDetailDto> {
    return this.termsAdminService.get();
  }

  @Put()
  @ApiOkResponse({ type: () => TermsDetailDto })
  update(@Body() payload: TermsUpdateAdminDto): Promise<TermsDetailDto> {
    return this.termsAdminService.update(payload);
  }
}
