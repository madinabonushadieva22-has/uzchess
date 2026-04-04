import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { OtpType } from '../entities/otpCodes.entity';


export class OtpCodesSendDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'mdnsh@example.com' })
  login!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
