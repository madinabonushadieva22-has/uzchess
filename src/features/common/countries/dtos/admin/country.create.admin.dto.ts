import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class CountryCreateAdminDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'Uzbekistan' })
  title!: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty({ example: 'flags/uz.png' })
  flag!: string;
}
