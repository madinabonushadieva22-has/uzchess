import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { LoginType, UserRole } from '../../entities/auth.entity';


export class AuthCreateAdminDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty ()
  fullName!: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty()
  login!: string;

  @IsEnum(LoginType)
  @ApiProperty({ enum: LoginType })
  loginType!: LoginType;

  @IsOptional()
  @IsEnum(UserRole)
  @ApiPropertyOptional({ enum: UserRole, default: UserRole.USER })
  role?: UserRole;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(128)
  @ApiPropertyOptional()
  password?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  profileImage?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  birthDate?: string;
}
