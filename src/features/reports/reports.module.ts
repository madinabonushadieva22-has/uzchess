import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportCategoriesAdminController } from './reportCategories/controllers/admin/reportCategories.admin.controller';
import { ReportCategoriesPublicController } from './reportCategories/controllers/public/reportCategories.public.controller';
import { ReportsAdminController } from './reports/controllers/admin/reports.admin.controller';
import { ReportsPublicController } from './reports/controllers/public/reports.public.controller';
import { ReportCategoriesAdminService } from './reportCategories/services/admin/reportCategories.admin.service';
import { ReportCategoriesPublicService } from './reportCategories/services/public/reportCategories.public.service';
import { ReportsAdminService } from './reports/services/admin/reports.admin.service';
import { ReportsPublicService } from './reports/services/public/reports.public.service';

import { ReportEntity } from './reports/entities/reports.entity';
import { ReportCategoryEntity } from './reportCategories/entities/reportCategories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntity, ReportCategoryEntity]),
  ],
  controllers: [
    ReportCategoriesAdminController,
    ReportCategoriesPublicController,
    ReportsAdminController,
    ReportsPublicController,
  ],
  providers: [
    ReportCategoriesAdminService,
    ReportCategoriesPublicService,
    ReportsAdminService,
    ReportsPublicService,
  ],
  exports: [
    TypeOrmModule,
    ReportsAdminService,
    ReportsPublicService,
  ],
})
export class ReportsModule {}
