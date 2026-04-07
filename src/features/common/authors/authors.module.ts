import { Module } from '@nestjs/common';
import { AuthorsPublicController } from './controllers/public/authors.public.controller';
import { AuthorsAdminService } from './services/admin/authors.admin.service';
import { AuthorsPublicService } from './services/public/authors.public.service';
import { AuthorsAdminController } from './controllers/admin/authors.admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from './entities/authors.entity';


@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorsAdminController, AuthorsPublicController],
  providers: [AuthorsAdminService, AuthorsPublicService],
  exports: [TypeOrmModule],
})
export class AuthorsModule {}
