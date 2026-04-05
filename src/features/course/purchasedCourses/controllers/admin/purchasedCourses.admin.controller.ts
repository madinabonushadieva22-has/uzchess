import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { PurchasedCoursesAdminService } from '../../services/admin/purchasedCourses.admin.service';
import { PurchasedCourseListAdminDto } from '../../dtos/admin/purchasedCourses.list.admin.dto';


@ApiTags('Admin / Purchased Courses')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/purchased-courses')
export class PurchasedCoursesAdminController {
  constructor(private readonly service: PurchasedCoursesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => PurchasedCourseListAdminDto, isArray: true })
  getAll(): Promise<PurchasedCourseListAdminDto[]> {
    return this.service.getAll();
  }

  @Get('user/:userId')
  @ApiOkResponse({ type: () => PurchasedCourseListAdminDto, isArray: true })
  getByUser(
    @Param('userId') userId: number,
  ): Promise<PurchasedCourseListAdminDto[]> {
    return this.service.getByUser(userId);
  }
}
