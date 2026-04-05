import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { NewsViewEntity } from '../../newsViews/entities/newViews.entity';



@Entity('News')
export class News extends BaseModel {
  @Column({ length: 256 })
  title!: string;

  @Column({ length: 128 })
  image!: string;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ type: 'text' })
  content!: string;

  @OneToMany(() => NewsViewEntity, (nv) => nv.news)
  views!: NewsViewEntity[];
}
