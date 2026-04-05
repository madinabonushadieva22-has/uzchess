import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { BookLikesAdminService } from '../../services/admin/bookLike.admin.service';
import { BookLikeListAdminDto } from '../../dtos/admin/bookLike.list.admin.dto';


@ApiTags('Admin / Book Likes')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-likes')
export class BookLikesAdminController {
  constructor(private readonly service: BookLikesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => BookLikeListAdminDto, isArray: true })
  getAll(): Promise<BookLikeListAdminDto[]> {
    return this.service.getAll();
  }
}
