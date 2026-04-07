import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersAdminController } from './controllers/admin/players.admin.controller';
import { PlayersPublicController } from './controllers/public/players.public.controller';
import { PlayersAdminService } from './services/admin/players.admin.service';
import { PlayersPublicService } from './services/public/players.public.service';
import { PlayerEntity } from './entities/players.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerEntity])],
  controllers: [PlayersAdminController, PlayersPublicController],
  providers: [PlayersAdminService, PlayersPublicService],
  exports: [TypeOrmModule, PlayersAdminService, PlayersPublicService],
})
export class PlayersModule {}
