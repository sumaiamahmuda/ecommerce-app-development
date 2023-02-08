import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SellerModule } from './Seller/seller.module';
import { ModeratorModule } from './Moderator/moderator.module';

@Module({
  //import individual module here. Do not override this 
  imports: [SellerModule, ModeratorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
