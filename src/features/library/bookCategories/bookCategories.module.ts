import { Module } from '@nestjs/common';
import { BookCategoriesAdminController } from './controllers/admin/bookCategories.admin.controller';
import { BookCategoriesPublicController } from './controllers/public/bookCategories.public.controller';
import { BookCategoriesAdminService } from './services/admin/bookCategories.admin.service';
import { BookCategoriesPublicService } from './services/public/bookCategories.public.service';


@Module({
  controllers: [BookCategoriesAdminController, BookCategoriesPublicController],
  providers: [BookCategoriesAdminService, BookCategoriesPublicService],
})
export class BookCategoriesModule {}
