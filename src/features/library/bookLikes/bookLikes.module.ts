import { Module } from '@nestjs/common';
import { BookLikesAdminController } from './controllers/admin/bookLike.admin.controller';
import { BookLikesPublicController } from './controllers/public/bookLike.public.controller';
import { BookLikesPublicService } from './services/public/bookLike.public.service';
import { BookLikesAdminService } from './services/admin/bookLike.admin.service';


@Module({
  controllers: [BookLikesAdminController, BookLikesPublicController],
  providers: [BookLikesAdminService, BookLikesPublicService],
})
export class BookLikesModule {}
