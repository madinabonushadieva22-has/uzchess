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
import { AuthenticationGuard } from 'src/core/guards/autentification.guard';
import { UserRole } from '../../../../../core/enums';
import { Roles } from 'src/core/decorators/roles.decorator';
import { CourseSectionsAdminService } from '../../services/admin/courseSections.admin.service';
import { CourseSectionListAdminDto } from '../../dtos/admin/courseSection.list.admin.dto';
import { CourseSectionCreateAdminDto } from '../../dtos/admin/courseSection.create.admin.dto';
import { CourseSectionUpdateAdminDto } from '../../dtos/admin/courseSection.update.admin.dto';


@ApiTags('Admin / Course Sections')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
@Controller('admin/course-sections')
export class CourseSectionsAdminController {
  constructor(private readonly service: CourseSectionsAdminService) {}

  @Get('course/:courseId')
  @ApiOkResponse({ type: () => CourseSectionListAdminDto, isArray: true })
  getAllByCourse(
    @Param('courseId') courseId: number,
  ): Promise<CourseSectionListAdminDto[]> {
    return this.service.getAllByCourse(courseId);
  }

  @Post()
  @ApiOkResponse({ type: () => CourseSectionListAdminDto })
  create(
    @Body() payload: CourseSectionCreateAdminDto,
  ): Promise<CourseSectionListAdminDto> {
    return this.service.create(payload);
  }

  @Patch(':id')
  @ApiOkResponse({ type: () => CourseSectionListAdminDto })
  update(
    @Param('id') id: number,
    @Body() payload: CourseSectionUpdateAdminDto,
  ): Promise<CourseSectionListAdminDto> {
    return this.service.update(id, payload);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Promise<void> {
    return this.service.delete(id);
  }
}
