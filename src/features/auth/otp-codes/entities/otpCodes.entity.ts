import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';
import { OtpType } from '../../../../core/enums';
import { UserEntity } from '../../../common/users/entities/user.entity';

@Entity('otpCodes')
export class OtpCodeEntity extends BaseModel {
  @Column()
  userId!: number;

  @ManyToOne(() => UserEntity, (user) => user.otpCodes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: UserEntity;

  @Column({ length: 6 })
  code!: string;

  @Column({ type: 'timestamp' })
  date!: string;

  @Column({ type: 'enum', enum: OtpType })
  type!: OtpType;
}
