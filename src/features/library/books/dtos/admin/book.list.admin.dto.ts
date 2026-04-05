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

export class BookListAdminDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiPropertyOptional() image?: string;
  @Expose() @ApiProperty() price!: number;
  @Expose() @ApiPropertyOptional() newPrice?: number;
  @Expose() @ApiPropertyOptional() rating?: number;
  @Expose() @ApiProperty() reviewsCount!: number;
  @Expose() @ApiProperty() pages!: number;
  @Expose() @ApiProperty() pubDate!: string;
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
