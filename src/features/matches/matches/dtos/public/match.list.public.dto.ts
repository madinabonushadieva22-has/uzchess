import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MatchType, WinnerType } from '../../../../../core/enums';


class PlayerShortDto { @Expose() @ApiProperty() id!: number; @Expose() @ApiProperty() fullName!: string; }

export class MatchListPublicDto {
  @Expose() @ApiProperty() id!: number;
  @Expose() @ApiProperty() firstPlayerResult!: number;
  @Expose() @ApiProperty() secondPlayerResult!: number;
  @Expose() @ApiProperty({ enum: MatchType }) type!: MatchType;
  @Expose() @ApiProperty() moves!: number;
  @Expose() @ApiProperty() date!: string;
  @Expose() @ApiProperty({ enum: WinnerType }) winner!: WinnerType;
  @Expose() @Type(() => PlayerShortDto) @ApiProperty({ type: () => PlayerShortDto }) firstPlayer!: PlayerShortDto;
  @Expose() @Type(() => PlayerShortDto) @ApiProperty({ type: () => PlayerShortDto }) secondPlayer!: PlayerShortDto;
}