import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OtpCodeEntity, OtpType } from '../entities/otpCodes.entity';
import { AuthEntity } from '../../auth/entities/auth.entity';
import { OtpCodesSendDto } from '../dtos/otpCodes.send-otp.dto';
import { OtpCodesVerifyDto } from '../dtos/otpCodes.verify-otp.dto';

@Injectable()
export class OtpCodesPublicService {
  async sendOtp(payload: OtpCodesSendDto): Promise<{ message: string }> {
    const user = await AuthEntity.findOneBy({ login: payload.login });
    if (!user) throw new NotFoundException('User with given login not found');

    await OtpCodeEntity.delete({ userId: user.id, type: payload.type });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expireDate = new Date(Date.now() + 5 * 60 * 1000);

    const otp = OtpCodeEntity.create({
      userId: user.id,
      code,
      date: expireDate.toISOString(),
      type: payload.type,
    });
    await OtpCodeEntity.save(otp);

    // TODO: Send via SMS/email
    console.log(`OTP for ${payload.login}: ${code}`);

    return { message: 'OTP sent successfully' };
  }

  async verifyOtp(payload: OtpCodesVerifyDto): Promise<{ message: string }> {
    const user = await AuthEntity.findOneBy({ login: payload.login });
    if (!user) throw new NotFoundException('User with given login not found');

    const otp = await OtpCodeEntity.findOneBy({
      userId: user.id,
      code: payload.code,
      type: payload.type,
    });
    if (!otp) throw new BadRequestException('Invalid OTP code');

    if (new Date(otp.date) < new Date()) {
      await OtpCodeEntity.remove(otp);
      throw new BadRequestException('OTP code has expired');
    }

    if (payload.type === OtpType.REGISTER) {
      user.isVerified = true;
      user.isActive = true;
      await AuthEntity.save(user);
    }

    await OtpCodeEntity.remove(otp);
    return { message: 'OTP verified successfully' };
  }
}
