import { Module } from '@nestjs/common';
import { customerController } from './customer.controller';
import { CustomerService } from './customerservice.service';


@Module({

  controllers: [customerController],
  providers: [CustomerService],
})
export class customerModule {}