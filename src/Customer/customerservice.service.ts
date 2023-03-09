import { Injectable } from "@nestjs/common";
import { customerForm } from "./customerfrom.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from "./customerentity.entity";


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private adminRepo: Repository<CustomerEntity>,
      ) {}


/*insertUser(mydto:customerForm):any {
    
       return "customer Inserted name: " + mydto.id+" and id is " + mydto.name;
    }*/

    insertUser(mydto:customerForm):any {
        const adminaccount = new CustomerEntity()
        adminaccount.name = mydto.name;
        adminaccount.email = mydto.email;
        adminaccount.password = mydto.password;
        //adminaccount.address = mydto.address;
       return this.adminRepo.save(adminaccount);
          }

          getuser(id):any{
            return this.adminRepo.findOneBy({id});
          }


          deleteuserbyid(id):any {
    
            return this.adminRepo.delete(id);
        }

updateUser(name,id):any {
        return "customer updated name: " +name+" and id is " +id;
    }
updateUserbyid(name,id):any {
        return "Update customer where id " +id+" and change name to " +name;
    }
    deleteUserbyid(id):any {
    
        return "Delete id is "+id;
    }
    

}