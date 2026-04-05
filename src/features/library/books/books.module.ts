import { Module } from '@nestjs/common';
import { BooksAdminController } from './controllers/admin/book.admin.controller';
import { BooksPublicController } from './controllers/public/book.public.controller';
import { BooksPublicService } from './services/public/book.public.service';
import { BooksAdminService } from './services/admin/book.admin.service';

@Module({
  controllers: [BooksAdminController, BooksPublicController],
  providers: [BooksAdminService, BooksPublicService],
  exports: [BooksAdminService, BooksPublicService],
})
export class BooksModule {}
