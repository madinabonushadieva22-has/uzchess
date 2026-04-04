import { Module } from '@nestjs/common';
import { UsersAdminController } from './controllers/admin/users.admin.controller';
import { UsersPublicController } from './controllers/public/users.public.controller';
import { UsersAdminService } from './services/admin/users.admin.service';
import { UsersPublicService } from './services/public/users.public.service';


@Module({
  controllers: [UsersAdminController, UsersPublicController],
  providers: [UsersAdminService, UsersPublicService],
  exports: [UsersAdminService, UsersPublicService],
})
export class UsersModule {}
