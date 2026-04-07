import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { UserEntity } from '../../../common/users/entities/user.entity';
import { News } from '../../news/entities/news.entity';


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

  @ManyToOne(() => News, (news) => news.views, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'newsId' })
  news!: News;

  @Column({ type: 'timestamp' })
  firstDate!: string;

  @Column({ type: 'timestamp' })
  lastDate!: string;

  @Column({ default: 1 })
  count!: number;
}
