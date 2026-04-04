import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class DifficultyCreateAdminDto {
  @IsString()
  @MaxLength(32)
  @ApiProperty()
  title!: string;

  @IsString()
  @MaxLength(128)
  @ApiProperty()
  icon!: string;
}