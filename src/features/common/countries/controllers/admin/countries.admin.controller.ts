import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../../../../core/decorators/roles.decorator';
import { UserRole } from '../../../../auth/auth/entities/auth.entity';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { CountryListAdminDto } from '../../dtos/admin/country.list.admin.dto';
import { CountriesAdminService } from '../../services/admin/countries.admin.service';
import { CountryCreateAdminDto } from '../../dtos/admin/country.create.admin.dto';
import { CountryUpdateAdminDto } from '../../dtos/admin/country.update.admin.dto';


@ApiTags('Admin / Countries')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/countries')
export class CountriesAdminController {
  constructor(private readonly countriesAdminService: CountriesAdminService) {}

  @Get()
  @ApiOkResponse({ type: () => CountryListAdminDto, isArray: true })
  getAll(): Promise<CountryListAdminDto[]> {
    return this.countriesAdminService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: () => CountryListAdminDto })
  getOne(@Param('id') id: number): Promise<CountryListAdminDto> {
    return this.countriesAdminService.getOne(id);
  }

  @Post()
  @ApiOkResponse({ type: () => CountryListAdminDto })
  create(@Body() payload: CountryCreateAdminDto): Promise<CountryListAdminDto> {
    return this.countriesAdminService.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => CountryListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CountryUpdateAdminDto,
  ): Promise<CountryListAdminDto> {
    return this.countriesAdminService.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.countriesAdminService.delete(id);
  }
}
