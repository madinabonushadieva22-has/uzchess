import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ReportType } from '../../../../../core/enums';


class CategoryShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
}

export class ReportListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() userId!: number;
  @Expose() @ApiProperty({ enum: ReportType }) target!: ReportType;
  @Expose() @ApiProperty() targetId!: number;
  @Expose() @ApiPropertyOptional() description?: string;
  @Expose() @ApiProperty() created!: string;
  @Expose()
  @Type(() => CategoryShortDto)
  @ApiProperty({ type: () => CategoryShortDto })
  category!: CategoryShortDto;
}
