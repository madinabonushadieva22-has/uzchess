import { BaseModel } from '../../../core/base-models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { PlayerEntity } from '../../matches/players/enitities/players.entity';
import { MatchType, WinnerType } from '../../../core/enums';

@Entity('matches')
export class MatchEntity extends BaseModel {
  @Column()
  firstPlayerId!: number;

  @ManyToOne(() => PlayerEntity, (player) => player.firstMatches, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'firstPlayerId' })
  firstPlayer!: PlayerEntity;

  @Column()
  firstPlayerResult!: number;

  @Column()
  secondPlayerId!: number;

  @ManyToOne(() => PlayerEntity, (player) => player.secondMatches, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'secondPlayerId' })
  secondPlayer!: PlayerEntity;

  @Column()
  secondPlayerResult!: number;

  @Column({ type: 'enum', enum: MatchType })
  type!: MatchType;

  @Column()
  moves!: number;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'enum', enum: WinnerType })
  winner!: WinnerType;
}