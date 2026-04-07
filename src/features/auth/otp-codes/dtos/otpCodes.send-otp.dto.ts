import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, MaxLength } from 'class-validator';
import { OtpType } from '../../../../core/enums';


export class OtpCodesSendDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login!: string;

  @IsEnum(OtpType)
  @ApiProperty({ enum: OtpType })
  type!: OtpType;
}
