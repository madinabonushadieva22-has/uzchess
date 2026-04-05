import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseLessonListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() thumbnail?: string;
  @Expose() @ApiPropertyOptional() order?: number;
  @Expose() @ApiProperty() isFree!: boolean;
}
