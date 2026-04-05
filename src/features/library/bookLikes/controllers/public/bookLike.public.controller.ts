import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { BookLikesPublicService } from '../../services/public/bookLike.public.service';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';
import { BookLikeCreatePublicDto } from '../../dtos/public/bookLike.create.public.dto';


@ApiTags('Public / Book Likes')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/book-likes')
export class BookLikesPublicController {
  constructor(private readonly service: BookLikesPublicService) {}

  @Post('toggle')
  @ApiOkResponse({ schema: { example: { liked: true } } })
  toggle(
    @CurrentUser() user: UserEntity,
    @Body() payload: BookLikeCreatePublicDto,
  ): Promise<{ liked: boolean }> {
    return this.service.toggle(user.id, payload);
  }
}
