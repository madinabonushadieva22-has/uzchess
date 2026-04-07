import { Module } from '@nestjs/common';
import { BooksAdminController } from './controllers/admin/book.admin.controller';
import { BooksPublicController } from './controllers/public/book.public.controller';
import { BooksPublicService } from './services/public/book.public.service';
import { BooksAdminService } from './services/admin/book.admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BooksAdminController, BooksPublicController],
  providers: [BooksAdminService, BooksPublicService],
  exports: [BooksAdminService, BooksPublicService, TypeOrmModule],
})
export class BooksModule {}
