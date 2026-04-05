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
import { BooksAdminService } from '../../services/admin/book.admin.service';
import { BookListAdminDto } from '../../dtos/admin/book.list.admin.dto';
import { BookDetailAdminDto } from '../../dtos/admin/book.detail.admin.dto';
import { BookCreateAdminDto } from '../../dtos/admin/book.create.admin.dto';
import { BookUpdateAdminDto } from '../../dtos/admin/book.update.admin.dto';


@ApiTags('Admin / Books')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/books')
export class BooksAdminController {
  constructor(private readonly service: BooksAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => BookListAdminDto, isArray: true })
  getAll(): Promise<BookListAdminDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  getOne(@Param('id') id: number): Promise<BookDetailAdminDto> {
    return this.service.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  create(@Body() payload: BookCreateAdminDto): Promise<BookDetailAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => BookDetailAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: BookUpdateAdminDto,
  ): Promise<BookDetailAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
