import { Module } from '@nestjs/common';
import { PlayersModule } from '../players/players.module';
import { MatchesAdminController } from './controllers/admin/matches.admin.controller';
import { MatchesPublicController } from './controllers/public/matches.public.controller';
import { MatchesAdminService } from './services/admin/matches.admin.service';
import { MatchesPublicService } from './services/public/matches.public.service';


@Module({
  imports: [PlayersModule],
  controllers: [MatchesAdminController, MatchesPublicController],
  providers: [MatchesAdminService, MatchesPublicService],
  exports: [PlayersModule, MatchesAdminService, MatchesPublicService],
})
export class MatchesModule {}
