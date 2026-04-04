import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Length, MaxLength } from 'class-validator';
import { OtpType } from '../entities/otpCodes.entity';


export class OtpCodesVerifyDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'mdnsh@example.com' })
  login!: string;

  @IsString()
  @Length(6, 6)
  @ApiProperty({ example: '123456' })
  code!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
