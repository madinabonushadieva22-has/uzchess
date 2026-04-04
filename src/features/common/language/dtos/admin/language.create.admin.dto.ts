import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class LanguageCreateAdminDto {
  @IsString()
  @MaxLength(32)
  @ApiProperty()
  title!: string;

  @IsString()
  @MaxLength(2)
  @ApiProperty()
  code!: string;
}
