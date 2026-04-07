import { Module } from '@nestjs/common';
import { TermsAdminController } from './controllers/admin/terms.admin.controller';
import { TermsPublicController } from './controllers/public/terms.public.controller';
import { TermsAdminService } from './services/admin/terms.admin.service';
import { TermsPublicService } from './services/public/terms.public.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TermsEntity } from './entities/terms.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TermsEntity])],
  controllers: [TermsAdminController, TermsPublicController],
  providers: [TermsAdminService, TermsPublicService],
  exports: [TypeOrmModule],
})
export class TermsModule {}
