import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';
import { MatchType, WinnerType } from '../../../../../core/enums';


export class MatchUpdateAdminDto {
  @IsOptional() @IsNumber() @ApiPropertyOptional() firstPlayerId?: number;
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiPropertyOptional()
  firstPlayerResult?: number;
  @IsOptional() @IsNumber() @ApiPropertyOptional() secondPlayerId?: number;
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiPropertyOptional()
  secondPlayerResult?: number;
  @IsOptional()
  @IsEnum(MatchType)
  @ApiPropertyOptional({ enum: MatchType })
  type?: MatchType;
  @IsOptional() @IsInt() @Min(1) @ApiPropertyOptional() moves?: number;
  @IsOptional() @IsDateString() @ApiPropertyOptional() date?: string;
  @IsOptional()
  @IsEnum(WinnerType)
  @ApiPropertyOptional({ enum: WinnerType })
  winner?: WinnerType;
}
