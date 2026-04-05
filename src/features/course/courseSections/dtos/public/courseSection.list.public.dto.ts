import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseSectionListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() order?: number;
}
