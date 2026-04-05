import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsInt, IsNumber, Min } from 'class-validator';
import { MatchType, WinnerType } from '../../../../../core/enums';


export class MatchCreateAdminDto {
  @IsNumber()
  @ApiProperty()
  firstPlayerId!: number;

  @IsInt()
  @Min(0)
  @ApiProperty()
  firstPlayerResult!: number;

  @IsNumber()
  @ApiProperty()
  secondPlayerId!: number;

  @IsInt()
  @Min(0)
  @ApiProperty()
  secondPlayerResult!: number;

  @IsEnum(MatchType)
  @ApiProperty({ enum: MatchType })
  type!: MatchType;

  @IsInt()
  @Min(1)
  @ApiProperty()
  moves!: number;

  @IsDateString()
  @ApiProperty()
  date!: string;


  @IsEnum(WinnerType)
  @ApiProperty({ enum: WinnerType })
  winner!: WinnerType;
}
