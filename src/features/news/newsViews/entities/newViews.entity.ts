import { BaseModel } from '../../../core/base-models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../common/users/enitities/users.entity';
import { NewsEntity } from '../../news/enitities/news.entity';

@Entity('newsViews')
export class NewsViewEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.newsViews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  newsId!: number;

  @ManyToOne(() => NewsEntity, (news) => news.views, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'newsId' })
  news!: NewsEntity;

  @Column({ type: 'timestamp' })
  firstDate!: string;

  @Column({ type: 'timestamp' })
  lastDate!: string;

  @Column({ default: 1 })
  count!: number;
}
