import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { OtpCodeEntity } from '../entities/otpCodes.entity';
import { OtpCodesListDto } from '../dtos/otpCodes.list.dto';

@Injectable()
export class OtpCodesAdminService {
  private readonly opts = { excludeExtraneousValues: true };

  async getAll(): Promise<OtpCodesListDto[]> {
    const codes = await OtpCodeEntity.find({
      order: { date: 'DESC' },
      relations: ['user'],
    });
    return plainToInstance(OtpCodesListDto, codes, this.opts);
  }

  async deleteByUserId(userId: number): Promise<void> {
    await OtpCodeEntity.delete({ userId });
  }
}
