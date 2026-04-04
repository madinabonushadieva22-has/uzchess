import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';

@Entity('terms')
export class TermsEntity extends BaseModel {
  @Column({ type: 'text' })
  content!: string;
}
