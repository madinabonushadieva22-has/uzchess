import { Module } from '@nestjs/common';
import {
  ReportCategoriesAdminController
} from './reportCategories/controllers/admin/reportCategories.admin.controller';
import {
  ReportCategoriesPublicController
} from './reportCategories/controllers/public/reportCategories.public.controller';
import { ReportsAdminController } from './reports/controllers/admin/reports.admin.controller';
import { ReportsPublicController } from './reports/controllers/public/reports.public.controller';
import { ReportCategoriesAdminService } from './reportCategories/services/admin/reportCategories.admin.service';
import { ReportCategoriesPublicService } from './reportCategories/services/public/reportCategories.public.service';
import { ReportsAdminService } from './reports/services/admin/reports.admin.service';
import { ReportsPublicService } from './reports/services/public/reports.public.service';


@Module({
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
})
export class ReportsModule {}
