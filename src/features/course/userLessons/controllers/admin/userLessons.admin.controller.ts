import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from 'src/core/decorators/roles.decorator';
import { UserLessonsAdminService } from '../../services/admin/userLessons.admin.service';
import { UserLessonListPublicDto } from '../../dtos/public/userLesson.list.public.dto';


@ApiTags('Admin / User Lessons')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/user-lessons')
export class UserLessonsAdminController {
  constructor(private readonly service: UserLessonsAdminService) {}

  @Get('user/:userId')
  @ApiOkResponse({ type: () => UserLessonListPublicDto, isArray: true })
  getByUser(
    @Param('userId') userId: number,
  ): Promise<UserLessonListPublicDto[]> {
    return this.service.getByUser(userId);
  }
}
