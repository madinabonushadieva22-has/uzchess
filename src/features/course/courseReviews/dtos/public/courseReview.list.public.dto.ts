import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseReviewListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() userId!: number;
  @Expose() @ApiProperty() rating!: number;
  @Expose() @ApiPropertyOptional() comment?: string;
  @Expose() @ApiProperty() created!: string;
}
