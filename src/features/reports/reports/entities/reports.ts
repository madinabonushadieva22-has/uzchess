import { BaseModel } from '../../../core/base-models';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../../common/users/enitities/users.entity';
import { ReportCategoryEntity } from '../../reports/enitities/reportCategories.entity';
import { ReportType } from '../../../core/enums';

@Entity('reports')
export class ReportEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.reports, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column()
  categoryId!: number;

  @ManyToOne(() => ReportCategoryEntity, (cat) => cat.reports, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'categoryId' })
  category!: ReportCategoryEntity;

  @Column({ type: 'enum', enum: ReportType })
  target!: ReportType;

  @Column()
  targetId!: number;

  @Column({ length: 256, nullable: true })
  description?: string;

  @Column({ type: 'timestamp' })
  created!: string;
}
