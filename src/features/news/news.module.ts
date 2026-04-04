import NewsAdminController from "./controllers/news.admin.controller";
import {Module} from "@nestjs/common";

@Module({
  controllers: [NewsAdminController],
})


export class NewsModule {}