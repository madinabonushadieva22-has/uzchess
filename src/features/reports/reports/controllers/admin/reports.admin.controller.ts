import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { ReportsAdminService } from '../../services/admin/reports.admin.service';
import { ReportListAdminDto } from '../../dtos/admin/report.list.admin.dto';


@ApiTags('Admin / Reports')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/reports')
export class ReportsAdminController {
  constructor(private readonly service: ReportsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => ReportListAdminDto, isArray: true })
  getAll(): Promise<ReportListAdminDto[]> {
    return this.service.getAll();
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
