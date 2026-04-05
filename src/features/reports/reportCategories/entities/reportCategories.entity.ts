import { BaseModel } from '../../../core/base-models';
import { Column, Entity, OneToMany } from 'typeorm';
import { ReportEntity } from '../../reports/enitities/reports.entity';

@Entity('reportCategories')
export class ReportCategoryEntity extends BaseModel {
  @Column({ length: 64, unique: true })
  title!: string;

  @Column({ nullable: true })
  order?: number;

  @OneToMany(() => ReportEntity, (report) => report.category)
  reports!: ReportEntity[];
}
