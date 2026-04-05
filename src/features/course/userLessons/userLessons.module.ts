import { Module } from '@nestjs/common';
import { UserLessonsAdminController } from './controllers/admin/userLessons.admin.controller';
import { UserLessonsPublicController } from './controllers/public/userLessons.public.controller';
import { UserLessonsAdminService } from './services/admin/userLessons.admin.service';
import { UserLessonsPublicService } from './services/public/userLessons.public.service';


@Module({
  controllers: [UserLessonsAdminController, UserLessonsPublicController],
  providers: [UserLessonsAdminService, UserLessonsPublicService],
})
export class UserLessonsModule {}