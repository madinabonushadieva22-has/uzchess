import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { CourseLikesPublicService } from '../../services/public/courseLikes.public.service';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { CourseLikeCreatePublicDto } from '../../dtos/public/courseLike.create.public.dto';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';


@ApiTags('Public / Course Likes')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/course-likes')
export class CourseLikesPublicController {
  constructor(private readonly service: CourseLikesPublicService) {}

  @Post('toggle')
  @ApiOkResponse({ schema: { example: { liked: true } } })
  toggle(
    @CurrentUser() user: UserEntity,
    @Body() payload: CourseLikeCreatePublicDto,
  ): Promise<{ liked: boolean }> {
    return this.service.toggle(user.id, payload);
  }
}
