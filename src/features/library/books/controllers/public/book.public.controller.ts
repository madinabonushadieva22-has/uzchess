import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BooksPublicService } from '../../services/public/book.public.service';
import { BookListPublicDto } from '../../dtos/public/book.list.public.dto';
import { BookDetailPublicDto } from '../../dtos/public/book.detail.public.dto';


@ApiTags('Public / Books')
@Controller('public/books')
export class BooksPublicController {
  constructor(private readonly service: BooksPublicService) {}

  @Get()
  @ApiOkResponse({ type: () => BookListPublicDto, isArray: true })
  getAll(): Promise<BookListPublicDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => BookDetailPublicDto })
  getOne(@Param('id') id: number): Promise<BookDetailPublicDto> {
    return this.service.getOne(id);
  }
}
