import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from '../players/players.module';
import { MatchesAdminController } from './controllers/admin/matches.admin.controller';
import { MatchesPublicController } from './controllers/public/matches.public.controller';
import { MatchesAdminService } from './services/admin/matches.admin.service';
import { MatchesPublicService } from './services/public/matches.public.service';
import { MatchEntity } from './entities/matches.entity'; // Match entity nomi shunday bo'lsa

@Module({
  imports: [
    PlayersModule,
    TypeOrmModule.forFeature([MatchEntity]),
  ],
  controllers: [MatchesAdminController, MatchesPublicController],
  providers: [MatchesAdminService, MatchesPublicService],
  exports: [
    PlayersModule,
    MatchesAdminService,
    MatchesPublicService,
    TypeOrmModule,
  ],
})
export class MatchesModule {}
