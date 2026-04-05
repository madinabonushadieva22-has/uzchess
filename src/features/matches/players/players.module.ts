import { Module } from '@nestjs/common';
import { PlayersAdminController } from './controllers/admin/players.admin.controller';
import { PlayersPublicController } from './controllers/public/players.public.controller';
import { PlayersAdminService } from './services/admin/players.admin.service';
import { PlayersPublicService } from './services/public/players.public.service';


@Module({
  controllers: [PlayersAdminController, PlayersPublicController],
  providers: [PlayersAdminService, PlayersPublicService],
})
export class PlayersModule {}
