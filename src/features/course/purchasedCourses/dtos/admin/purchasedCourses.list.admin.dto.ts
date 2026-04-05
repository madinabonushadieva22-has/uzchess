import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class CourseShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() image!: string;
}

export class PurchasedCourseListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() userId!: number;
  @Expose() @ApiProperty() isCompleted!: boolean;
  @Expose() @ApiProperty() date!: string;
  @Expose()
  @Type(() => CourseShortDto)
  @ApiProperty({ type: () => CourseShortDto })
  course!: CourseShortDto;
}
