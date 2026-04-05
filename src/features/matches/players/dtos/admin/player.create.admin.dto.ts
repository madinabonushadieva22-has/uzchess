import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class PlayerCreateAdminDto {
  @IsNumber() @ApiProperty() countryId!: number;
  @IsString() @MaxLength(64) @ApiProperty() fullName!: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  image?: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() classic?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() rapid?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() blitz?: number;
}
