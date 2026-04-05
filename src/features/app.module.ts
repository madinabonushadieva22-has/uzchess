import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './features/authorisation/auth.module';
import { CommonModule } from './features/common/common.module';
import { CourseFeatureModule } from './features/courses/courses.module';
import { LibraryModule } from './features/library/library.module';
import { MatchesModule } from './features/matches/matches.module';
import { ReportsModule } from './features/reports/reports.module';
import { NewsModule } from './features/news/news.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      /* sizning typeorm config */
    }),
    AuthModule,
    CommonModule,
    CourseFeatureModule,
    LibraryModule,
    MatchesModule,
    ReportsModule,
    NewsModule,
  ],
})
export class AppModule {}
