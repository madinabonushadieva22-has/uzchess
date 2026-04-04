import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OtpCodesPublicService } from '../../services/otpCodes.public.service';
import { OtpCodesSendDto } from '../../dtos/otpCodes.send-otp.dto';
import { OtpCodesVerifyDto } from '../../dtos/otpCodes.verify-otp.dto';


@ApiTags('Public / OtpCodes')
@Controller('public/otp-codes')
export class OtpCodesPublicController {
  constructor(private readonly otpCodesPublicService: OtpCodesPublicService) {}

  @Post('send')
  @HttpCode(200)
  @ApiOkResponse({ schema: { example: { message: 'OTP sent successfully' } } })
  sendOtp(@Body() payload: OtpCodesSendDto): Promise<{ message: string }> {
    return this.otpCodesPublicService.sendOtp(payload);
  }

  @Post('verify')
  @HttpCode(200)
  @ApiOkResponse({
    schema: { example: { message: 'OTP verified successfully' } },
  })
  verifyOtp(@Body() payload: OtpCodesVerifyDto): Promise<{ message: string }> {
    return this.otpCodesPublicService.verifyOtp(payload);
  }
}
