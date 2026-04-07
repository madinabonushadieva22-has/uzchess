import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Length, MaxLength } from 'class-validator';
import { OtpType } from '../../../../core/enums';



export class OtpCodesVerifyDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login!: string;

  @IsString()
  @Length(6, 6)
  @ApiProperty()
  code!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
