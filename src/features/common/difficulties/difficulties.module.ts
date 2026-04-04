import { Module } from '@nestjs/common';
import { DifficultiesAdminController } from './controllers/admin/difficulties.admin.controller';
import { DifficultiesPublicController } from './controllers/public/difficulties.public.controller';
import { DifficultiesAdminService } from './services/admin/difficulties.admin.service';
import { DifficultiesPublicService } from './services/public/difficulties.public.service';


@Module({
  controllers: [DifficultiesAdminController, DifficultiesPublicController],
  providers: [DifficultiesAdminService, DifficultiesPublicService],
})
export class DifficultiesModule {}
