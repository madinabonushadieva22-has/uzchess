import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthEntity } from '../../entities/auth.entity';
import { AuthCreatePublicDto } from '../../dtos/public/auth.create.public.dto';
import { AuthLoginPublicDto } from '../../dtos/public/auth.login.public.dto';

@Injectable()
export class AuthPublicService {
  constructor(private readonly jwtService: JwtService) {}

  async register(payload: AuthCreatePublicDto): Promise<{ token: string }> {
    const existing = await AuthEntity.findOneBy({ login: payload.login });
    if (existing)
      throw new ConflictException('User with this login already exists');

    const user = AuthEntity.create(payload as AuthEntity);
    if (payload.password) {
      user.password = await bcrypt.hash(payload.password, 10);
    }
    await AuthEntity.save(user);

    const token = this.jwtService.sign({ id: user.id, role: user.role });
    return { token };
  }

  async login(payload: AuthLoginPublicDto): Promise<{ token: string }> {
    const user = await AuthEntity.findOneBy({ login: payload.login });
    if (!user || !user.password)
      throw new UnauthorizedException('Invalid credentials');

    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    if (!user.isActive)
      throw new UnauthorizedException('Account is not active');

    const token = this.jwtService.sign({ id: user.id, role: user.role });
    return { token };
  }
}
