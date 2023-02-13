import { Controller, Get,Query,Param,Post,Body,Put,Delete, ParseIntPipe, ValidationPipe, UsePipes } from "@nestjs/common";
import { customerForm } from "./customerfrom.dto";
import { CustomerService } from "./customerservice.service";
@Controller("/customer")

export class customerController{
  constructor(private customerService: CustomerService){}

    @Get("/basbord")
    getcoustomer(): string {
    return "coustomer's profie:";
    }

    @Get("/customerhistory")
    coustomerhistory(): string {
    return "coustomer's profie:";
    }
    @Get("/findall")
    findall ( @Query() qry:any):any{
    return "Searched result shown: "+qry.name;
    }
    
    @Get("/findseller/:id")
    findSellerById (@Param() params): any {
        
    return "Customer Id is: "+ params.id;}

    @Post("/register/:name/:id")
    register(@Param() params): any {
    return "Customer name: "+ params.name + " & Id: " + params.id;
    }

    @Post("/login")
    login(@Body() body): any {
    return "Successfully logged in...\nCustomer name "+ body.name + " & Id: " + body.id;
    }
    @Post("/insertproduct")
    productAdd(@Body("name") name: string, @Body("id") id: number): any {
    return"Product name: "+ name + " & id: " + id ;
    }

    @Put("/updateProfile/:name/:id")
    updateProfile(@Param() params): any {
    return "Customer name: "+ params.name + " & Id: " +params.id;
    }

    @Put("/updateProduct/:name/:id")
    updateProduct(@Param('name') productName: string, @Param('id') productId:number): any {
    return "Customer name: "+ productName + " & Id: " + productId;
    }
    @Put("/updateAddress/:address")
    updateAddress(@Param() params): string {
    return "Customer updated address: "+ params.address;
    }
    @Delete ("/deleteUser/:name/:id")
    deleteUser(@Param() params): string {
    return "Customer deleted name: "
    + params.name + " & id: "+ params.id +" \nSuccessfully deleted...";
    }
    @Delete ("/deleteProduct/:name/:id")
    deleteProduct(@Param('name') productName: string,
   
    @Param('id') productId:number):  any {
    return "Customer deleted name: " + productName + " & id: " + productId + " \nSuccessfully deleted...";
  }
  @Post("/insertuser")
    @UsePipes(new ValidationPipe())
    insertUser(@Body() mydto:customerForm): any {
      return this.customerService.insertUser(mydto);
    }
  
    @Put("/updateuser/")
  @UsePipes(new ValidationPipe())
    updateUser( 
      @Body("name") name:string, 
      @Body("id") id:number
      ): any {
    return this.customerService.updateUser(name, id);
    

}
}