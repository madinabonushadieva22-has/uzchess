import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesAdminController } from './controllers/admin/countries.admin.controller';
import { CountriesPublicController } from './controllers/public/countries.public.controller';
import { CountriesPublicService } from './services/public/countries.public.service';
import { CountriesAdminService } from './services/admin/countries.admin.service';
import { CountryEntity } from './entities/countries.entity';

@Module({

  imports: [TypeOrmModule.forFeature([CountryEntity])],
  controllers: [CountriesAdminController, CountriesPublicController],
  providers: [CountriesAdminService, CountriesPublicService],
  exports: [TypeOrmModule],
})
export class CountriesModule {}
