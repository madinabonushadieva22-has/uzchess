import { Module } from '@nestjs/common';
import { BookCategoriesAdminController } from './controllers/admin/bookCategories.admin.controller';
import { BookCategoriesPublicController } from './controllers/public/bookCategories.public.controller';
import { BookCategoriesAdminService } from './services/admin/bookCategories.admin.service';
import { BookCategoriesPublicService } from './services/public/bookCategories.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategoryEntity } from './entities/bookCategories.entity';


@Module({
  imports: [TypeOrmModule.forFeature([BookCategoryEntity])],
  controllers: [BookCategoriesAdminController, BookCategoriesPublicController],
  providers: [BookCategoriesAdminService, BookCategoriesPublicService],
  exports: [TypeOrmModule],
})
export class BookCategoriesModule {}
