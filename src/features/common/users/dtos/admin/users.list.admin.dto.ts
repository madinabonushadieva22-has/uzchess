import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { LoginType, UserRole } from '../../../../../core/enums';


export class UserListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() fullName!: string;
  @Expose() @ApiProperty({ enum: UserRole }) role!: UserRole;
  @Expose() @ApiProperty({ enum: LoginType }) loginType!: LoginType;
  @Expose() @ApiProperty() login!: string;
  @Expose() @ApiProperty() isVerified!: boolean;
  @Expose() @ApiProperty() isActive!: boolean;
  @Expose() @ApiPropertyOptional() profileImage?: string;
  @Expose() @ApiPropertyOptional() birthDate?: string;
  @Expose() @ApiProperty() createdAt!: string;
  @Expose() @ApiPropertyOptional() updatedAt?: string;
}
