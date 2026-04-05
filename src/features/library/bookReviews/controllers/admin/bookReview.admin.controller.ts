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
import { BookReviewsAdminService } from '../../services/admin/bookReview.admin.service';
import { BookReviewListAdminDto } from '../../dtos/admin/bookReview.list.admin.dto';


@ApiTags('Admin / Book Reviews')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-reviews')
export class BookReviewsAdminController {
  constructor(private readonly service: BookReviewsAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => BookReviewListAdminDto, isArray: true })
  getAll(): Promise<BookReviewListAdminDto[]> {
    return this.service.getAll();
  }

  @Get('book/:bookId')
  @ApiOkResponse({ type: () => BookReviewListAdminDto, isArray: true })
  getByBook(
    @Param('bookId') bookId: number,
  ): Promise<BookReviewListAdminDto[]> {
    return this.service.getByBook(bookId);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
