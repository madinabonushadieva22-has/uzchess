// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthAdminController } from './auth/controllers/admin/auth.admin.controller';
import { AuthPublicController } from './auth/controllers/public/auth.public.controller';
import { AuthAdminService } from './auth/services/admin/auth.admin.service';
import { AuthPublicService } from './auth/services/public/auth.public.service';
import { OtpCodesAdminService } from './otp-codes/services/otpCodes.admin.service';
import { OtpCodesPublicService } from './otp-codes/services/otpCodes.public.service';
import { JwtStrategy } from './jwt.strategy';
import { OtpCodesAdminController } from './otp-codes/controllers/admin/otpCodes.admin.controller';
import { OtpCodesPublicController } from './otp-codes/controllers/public/otpCodes.public.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '7d' },
      global: true
    }),
  ],
  controllers: [
    AuthAdminController,
    AuthPublicController,
    OtpCodesAdminController,
    OtpCodesPublicController,
  ],
  providers: [
    AuthAdminService,
    AuthPublicService,
    OtpCodesAdminService,
    OtpCodesPublicService,
    JwtStrategy,
  ],
  exports: [AuthAdminService, AuthPublicService, JwtModule],
})
export class AuthModule {}
