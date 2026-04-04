import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class AuthorShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() fullName!: string;
}

class CategoryShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
}

export class CourseListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() image!: string;
  @Expose() @ApiProperty() price!: number;
  @Expose() @ApiPropertyOptional() newPrice?: number;
  @Expose() @ApiProperty() isPublished!: boolean;
  @Expose() @ApiProperty() rating?: number;
  @Expose() @ApiProperty() reviewsCount!: number;
  @Expose() @ApiProperty() sectionsCount!: number;
  @Expose() @ApiProperty() lessonsCount!: number;
  @Expose() @ApiProperty() createdAt!: string;

  @Expose()
  @Type(() => AuthorShortDto)
  @ApiProperty({ type: () => AuthorShortDto })
  author!: AuthorShortDto;

  @Expose()
  @Type(() => CategoryShortDto)
  @ApiProperty({ type: () => CategoryShortDto })
  category!: CategoryShortDto;
}
