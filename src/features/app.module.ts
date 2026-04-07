import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CourseFeatureModule } from './course/course.module';
import { LibraryModule } from './library/library.module';
import { MatchesModule } from './matches/matches/matches.module';
import { ReportsModule } from './reports/reports.module';
import { NewsModule } from './news/news.module';
import { AuthenticationGuard } from '../core/guards/autentification.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';


@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        SECRET_KEY: Joi.string().required(),
        PORT: Joi.number().required(),
        DB_URL: Joi.string().required(),
        DEFAULT_DB_URL: Joi.string().required(),
        TEST_DB_URL: Joi.string().required(),
        JWT_EXPIRE: Joi.string().required(),
        OTP_EXPIRE: Joi.number().required(),
        OTP_RESEND: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        DEFAULT_SIZE: Joi.number().required(),
        DEFAULT_PAGE: Joi.number().required(),
        BASE_URL: Joi.string().required(),
      }),
    }),


    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DB_URL'),
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      }),
    }),


    AuthModule,
    CommonModule,
    CourseFeatureModule,
    LibraryModule,
    MatchesModule,
    ReportsModule,
    NewsModule,
    JwtModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard,
    },
  ],
})
export class AppModule {}