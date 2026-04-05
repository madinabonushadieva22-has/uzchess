import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CourseLessonListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() courseId!: number;
  @Expose() @ApiProperty() courseSectionId!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() thumbnail?: string;
  @Expose() @ApiProperty() video!: string;
  @Expose() @ApiPropertyOptional() order?: number;
  @Expose() @ApiProperty() date!: string;
  @Expose() @ApiProperty() isFree!: boolean;
}
