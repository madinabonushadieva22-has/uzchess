import { Module } from '@nestjs/common';
import { AuthorsPublicController } from './controllers/public/authors.public.controller';
import { AuthorsAdminService } from './services/admin/authors.admin.service';
import { AuthorsPublicService } from './services/public/authors.public.service';
import { AuthorsAdminController } from './controllers/admin/authors.admin.controller';


@Module({
  controllers: [AuthorsAdminController, AuthorsPublicController],
  providers: [AuthorsAdminService, AuthorsPublicService],
})
export class AuthorsModule {}
