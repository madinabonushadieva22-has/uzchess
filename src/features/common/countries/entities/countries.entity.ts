import { Column, Entity, OneToMany } from 'typeorm';
import { PlayerEntity } from '../../matches/players/enitities/players.entity';
import { BaseModel } from '../../../../core/base-model';

@Entity('countries')
export class CountryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @Column({ length: 128 })
  flag!: string;

  @OneToMany(() => PlayerEntity, (player) => player.country)
  players!: PlayerEntity[];
}
