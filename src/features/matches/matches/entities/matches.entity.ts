import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { PlayerEntity } from '../../players/entities/players.entity';
import { MatchType, WinnerType } from 'src/core/enums';


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