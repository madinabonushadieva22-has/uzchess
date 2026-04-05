import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class PlayerUpdateAdminDto {
  @IsOptional() @IsNumber() @ApiPropertyOptional() countryId?: number;
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional()
  fullName?: string;
  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  image?: string;
  @IsOptional() @IsNumber() @ApiPropertyOptional() classic?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() rapid?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() blitz?: number;
}
