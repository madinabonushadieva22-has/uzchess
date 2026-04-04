import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OtpType } from '../entities/otpCodes.entity';

export class OtpCodesListDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() userId!: number;
  @Expose() @ApiProperty() code!: string;
  @Expose() @ApiProperty() date!: string;
  @Expose() @ApiProperty({ enum: OtpType }) type!: OtpType;
}
