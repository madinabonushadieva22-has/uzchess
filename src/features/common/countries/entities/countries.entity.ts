import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { PlayerEntity } from '../../../matches/players/entities/players.entity';


@Entity('countries')
export class CountryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @Column({ length: 128 })
  flag!: string;

  @OneToMany(() => PlayerEntity, (player) => player.country)
  players!: PlayerEntity[];
}
