import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthPublicService } from '../../services/public/auth.public.service';
import { AuthCreatePublicDto } from '../../dtos/public/auth.create.public.dto';
import { AuthLoginPublicDto } from '../../dtos/public/auth.login.public.dto';

@ApiTags('Public / Auth')
@Controller('public/auth')
export class AuthPublicController {
  constructor(private readonly authPublicService: AuthPublicService) {}

  @Post('register')
  @ApiOkResponse()
  register(@Body() payload: AuthCreatePublicDto): Promise<{ token: string }> {
    return this.authPublicService.register(payload);
  }

  @Post('login')
  @ApiOkResponse()
  login(@Body() payload: AuthLoginPublicDto): Promise<{ token: string }> {
    return this.authPublicService.login(payload);
  }
}
