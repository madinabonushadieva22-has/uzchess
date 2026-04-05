import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookReviewsPublicService } from '../../services/public/bookReview.public.service';
import { BookReviewListPublicDto } from '../../dtos/public/bookReview.list.public.dto';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { CurrentUser } from '../../../../../core/decorators/current-user.decorator';
import { BookReviewCreatePublicDto } from '../../dtos/public/bookReview.create.public.dto';


@ApiTags('Public / Book Reviews')
@Controller('public/book-reviews')
export class BookReviewsPublicController {
  constructor(private readonly service: BookReviewsPublicService) {}

  @Get('book/:bookId')
  @ApiOkResponse({ type: () => BookReviewListPublicDto, isArray: true })
  getByBook(
    @Param('bookId') bookId: number,
  ): Promise<BookReviewListPublicDto[]> {
    return this.service.getByBook(bookId);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthenticationGuard)
  @ApiOkResponse({ type: () => BookReviewListPublicDto })
  create(
    @CurrentUser() user: UserEntity,
    @Body() payload: BookReviewCreatePublicDto,
  ): Promise<BookReviewListPublicDto> {
    return this.service.create(user.id, payload);
  }
}
