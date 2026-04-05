import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ReportCategoryListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() order?: number;
  @Expose() @ApiProperty() createdAt!: string;
}
