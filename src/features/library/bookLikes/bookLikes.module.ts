import { Module } from '@nestjs/common';
import { BookLikesAdminController } from './controllers/admin/bookLike.admin.controller';
import { BookLikesPublicController } from './controllers/public/bookLike.public.controller';
import { BookLikesPublicService } from './services/public/bookLike.public.service';
import { BookLikesAdminService } from './services/admin/bookLike.admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookLikeEntity } from './entities/bookLikes.entity';


@Module({
  imports: [TypeOrmModule.forFeature([BookLikeEntity])],
  controllers: [BookLikesAdminController, BookLikesPublicController],
  providers: [BookLikesAdminService, BookLikesPublicService],
  exports : [TypeOrmModule],
})
export class BookLikesModule {}
