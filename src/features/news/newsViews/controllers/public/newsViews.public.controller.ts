import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { NewsViewsPublicService } from '../../services/public/newsViews.public.service';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';
import { NewsViewRegisterPublicDto } from '../../dtos/public/newsView.register.public.dto';


@ApiTags('Public / News Views')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/news-views')
export class NewsViewsPublicController {
  constructor(private readonly service: NewsViewsPublicService) {}

  @Post()
  @HttpCode(200)
  @ApiOkResponse({ schema: { example: { message: 'View registered' } } })
  register(
    @CurrentUser() user: UserEntity,
    @Body() payload: NewsViewRegisterPublicDto,
  ): Promise<{ message: string }> {
    return this.service.register(user.id, payload);
  }
}
