import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './adminservice.service';
//import { AdminModule } from './admin/adminmodule.module';
@Module({
  //imports: [AdminModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
