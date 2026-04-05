import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { CourseLikesAdminService } from '../../services/admin/courseLikes.admin.service';
import { CourseLikeListAdminDto } from '../../dtos/admin/courseLike.list.admin.dto';


@ApiTags('Admin / Course Likes')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-likes')
export class CourseLikesAdminController {
  constructor(private readonly service: CourseLikesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CourseLikeListAdminDto, isArray: true })
  getAll(): Promise<CourseLikeListAdminDto[]> {
    return this.service.getAll();
  }
}
