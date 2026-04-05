import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CountryShortDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() title!: string;
  @Expose() @ApiProperty() flag!: string;
}

export class PlayerListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() fullName!: string;
  @Expose() @ApiPropertyOptional() image?: string;
  @Expose() @ApiPropertyOptional() classic?: number;
  @Expose() @ApiPropertyOptional() rapid?: number;
  @Expose() @ApiPropertyOptional() blitz?: number;
  @Expose()
  @Type(() => CountryShortDto)
  @ApiProperty({ type: () => CountryShortDto })
  country!: CountryShortDto;
}
