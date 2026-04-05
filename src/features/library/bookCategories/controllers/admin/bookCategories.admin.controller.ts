import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { BookCategoriesAdminService } from '../../services/admin/bookCategories.admin.service';
import { BookCategoryListAdminDto } from '../../dtos/admin/bookCategory.list.admin.dto';
import { BookCategoryCreateAdminDto } from '../../dtos/admin/bookCategory.create.admin.dto';
import { BookCategoryUpdateAdminDto } from '../../dtos/admin/bookCategory.update.admin.dto';


@ApiTags('Admin / Book Categories')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/book-categories')
export class BookCategoriesAdminController {
  constructor(private readonly service: BookCategoriesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => BookCategoryListAdminDto, isArray: true })
  getAll(): Promise<BookCategoryListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  getOne(@Param('id') id: number): Promise<BookCategoryListAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  create(
    @Body() payload: BookCategoryCreateAdminDto,
  ): Promise<BookCategoryListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => BookCategoryListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: BookCategoryUpdateAdminDto,
  ): Promise<BookCategoryListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
