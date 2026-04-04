import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from '../../../../../core/guards/autentification.guard';
import { UsersPublicService } from '../../services/public/users.public.service';
import { UsersDetailPublicDto } from '../../dtos/public/users.detail.public.dto';


@ApiTags('Public / Users')
@ApiBearerAuth()
@UseGuards(AuthenticationGuard)
@Controller('public/users')
export class UsersPublicController {
  constructor(private readonly usersPublicService: UsersPublicService) {}

  @Get(':id')
  @ApiOkResponse({ type: () => UsersDetailPublicDto })
  getOne(@Param('id') id: number): Promise<UsersDetailPublicDto> {
    return this.usersPublicService.getOne(id);
  }
}
