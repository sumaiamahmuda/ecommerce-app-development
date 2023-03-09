import { Module } from '@nestjs/common';
import { customerController } from './customer.controller';
import { CustomerService } from './customerservice.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from './customerentity.entity';


@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [customerController],
  providers: [CustomerService],
})
export class customerModule {}