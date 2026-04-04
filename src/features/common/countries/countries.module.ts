import { Module } from '@nestjs/common';
import { CountriesAdminController } from './controllers/admin/countries.admin.controller';
import { CountriesPublicController } from './controllers/public/countries.public.controller';
import { CountriesPublicService } from './services/public/countries.public.service';
import { CountriesAdminService } from './services/admin/countries.admin.service';


@Module({
  controllers: [CountriesAdminController, CountriesPublicController],
  providers: [CountriesAdminService, CountriesPublicService],
})
export class CountriesModule {}
