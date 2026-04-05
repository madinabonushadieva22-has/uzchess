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
class LanguageShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() code!: string;
}
class DifficultyShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() icon!: string;
}

export class BookDetailPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() description!: string;
  @Expose() @ApiPropertyOptional() image?: string;
  @Expose() @ApiProperty() price!: number;
  @Expose() @ApiPropertyOptional() newPrice?: number;
  @Expose() @ApiPropertyOptional() rating?: number;
  @Expose() @ApiProperty() reviewsCount!: number;
  @Expose() @ApiProperty() pages!: number;
  @Expose() @ApiProperty() pubDate!: string;
  @Expose()
  @Type(() => AuthorShortDto)
  @ApiProperty({ type: () => AuthorShortDto })
  author!: AuthorShortDto;
  @Expose()
  @Type(() => CategoryShortDto)
  @ApiProperty({ type: () => CategoryShortDto })
  category!: CategoryShortDto;
  @Expose()
  @Type(() => LanguageShortDto)
  @ApiProperty({ type: () => LanguageShortDto })
  language!: LanguageShortDto;
  @Expose()
  @Type(() => DifficultyShortDto)
  @ApiProperty({ type: () => DifficultyShortDto })
  difficulty!: DifficultyShortDto;
}
