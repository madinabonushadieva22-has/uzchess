import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { LoginType } from '../../entities/auth.entity';


export class AuthCreatePublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'Madina Shadieva' })
  fullName!: string;

  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'mdnsh@example.com' })
  login!: string;

  @IsEnum(LoginType)
  @ApiProperty({ enum: LoginType })
  loginType!: LoginType;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(128)
  @ApiPropertyOptional({ example: 'secret123' })
  password?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  @ApiPropertyOptional()
  profileImage?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '2000-01-01' })
  birthDate?: string;
}
