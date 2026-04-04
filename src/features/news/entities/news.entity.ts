import { BaseModel } from '../../../core/base-model';
import { Entity, Column } from 'typeorm';

@Entity('news')
export class News extends BaseModel {
  @Column({ length: 256 })
  title!: string;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ type: 'text' })
  content!: string;
}

