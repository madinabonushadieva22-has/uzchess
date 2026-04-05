import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET as string,
  signOptions: {
    expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as any,
  },
};