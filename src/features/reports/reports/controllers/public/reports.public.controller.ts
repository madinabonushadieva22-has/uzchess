import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { ReportsPublicService } from '../../services/public/reports.public.service';
import { UserEntity } from '../../../../common/users/entities/user.entity';
import { CurrentUser } from 'src/core/decorators/current-user.decorator';
import { ReportCreatePublicDto } from '../../dtos/public/report.create.public.dto';


@ApiTags('Public / Reports')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/reports')
export class ReportsPublicController {
  constructor(private readonly service: ReportsPublicService) {}

  @Post()
  @ApiOkResponse({
    schema: { example: { message: 'Report submitted successfully' } },
  })
  create(
    @CurrentUser() user: UserEntity,
    @Body() payload: ReportCreatePublicDto,
  ): Promise<{ message: string }> {
    return this.service.create(user.id, payload);
  }
}
