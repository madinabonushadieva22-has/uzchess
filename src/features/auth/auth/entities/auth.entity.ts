
import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../../core/base-model';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
}

export enum LoginType {
  EMAIL = 'email',
  NUMBER = 'number',
}

@Entity('users')
export class AuthEntity extends BaseModel {
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role!: UserRole;

  @Column({ length: 64 })
  fullName!: string;

  @Column({ length: 128, nullable: true })
  profileImage?: string;

  @Column({ length: 64, unique: true })
  login!: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType!: LoginType;

  @Column({ length: 128, nullable: true })
  password?: string;

  @Column({ type: 'date', nullable: true })
  birthDate?: string;

  @Column({ default: false })
  isVerified!: boolean;

  @Column({ default: false })
  isActive!: boolean;
}
