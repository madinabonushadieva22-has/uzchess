import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthLoginPublicDto {
  @IsString()
  @MaxLength(64)
  @ApiProperty({ example: 'mdnsh@example.com' })
  login!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(128)
  @ApiProperty({ example: 'secret123' })
  password!: string;
}
