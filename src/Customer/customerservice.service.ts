import { Injectable } from "@nestjs/common";
import { customerForm } from "./customerfrom.dto";


@Injectable()
export class CustomerService {



insertUser(mydto:customerForm):any {
    
       return "customer Inserted name: " + mydto.id+" and id is " + mydto.name;
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