import { Module } from '@nestjs/common';
import { LanguageAdminController } from './controllers/admin/language.admin.controller';
import { LanguagePublicController } from './controllers/public/language.public.controller';
import { LanguageAdminService } from './services/admin/language.admin.service';
import { LanguagePublicService } from './services/public/language.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity } from './entities/language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageEntity])],
  controllers: [LanguageAdminController, LanguagePublicController],
  providers: [LanguageAdminService, LanguagePublicService],
  exports: [TypeOrmModule],
})
export class LanguageModule {}
