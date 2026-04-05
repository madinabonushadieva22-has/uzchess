import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { CountryEntity } from '../../../common/countries/entities/countries.entity';
import { MatchEntity } from '../../matches/entities/matches.entity';


@Entity('players')
export class PlayerEntity extends BaseModel {
  @Column()
  countryId!: number;

  @ManyToOne(() => CountryEntity, (country) => country.players, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'countryId' })
  country!: CountryEntity;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  image?: string;

  @Column({ nullable: true })
  classic?: number;

  @Column({ nullable: true })
  rapid?: number;

  @Column({ nullable: true })
  blitz?: number;

  @OneToMany(() => MatchEntity, (match) => match.firstPlayer)
  firstMatches!: MatchEntity[];

  @OneToMany(() => MatchEntity, (match) => match.secondPlayer)
  secondMatches!: MatchEntity[];
}
