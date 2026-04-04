import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserRole } from '../../../../../core/enums';


export class UserUpdateAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(64)
  @ApiPropertyOptional()
  fullName?: string;

  @IsOptional()
  @IsEnum(UserRole)
  @ApiPropertyOptional({ enum: UserRole })
  role?: UserRole;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  profileImage?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  birthDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  isVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  isActive?: boolean;
}
