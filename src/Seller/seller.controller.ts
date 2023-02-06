import { Body, Controller, Get, Param, Post, Put, Delete, Query } from "@nestjs/common";


@Controller("/Seller")

export class SellerController {

@Get("/dashboard")
 getSeller(): string {
  return "Seller's Profile: ";
 }

@Get("/sellerhistory")
Sellerhistory(): string {
    return "Seller's Statistics: ";
}

@Get("/findall")
findAll(@Query() qry: any): any {
    return "Searched result shown: "+ qry.name;
}

@Get("/findseller/:id")
findSellerById (@Param() params): any {
    return "Seller Id is: "+ params.id;
}


@Post("/register/:name/:id")
register(@Param() params): any {
    return "Seller name: "+ params.name + " & Id: " + params.id;
}

@Post("/login")
login(@Body() body): any {
   return "Successfully logged in...\nSeller name "+ body.name + " & Id: " + body.id;
}

@Post("/insertproduct")
productAdd(@Body("name") name: string, @Body("id") id: number): any {
    return  "Product name: "+ name + " & id: " + id ;
}

@Put("/updateProfile/:name/:id")
updateProfile(@Param() params): any {
    return "Seller name: "+ params.name + " & Id: " +params.id;
}

@Put("/updateProduct/:name/:id")
updateProduct(@Param('name') productName: string, @Param('id') productId:number): any {
    return "Seller name: "+ productName + " & Id: " + productId;
}

@Put("/updateAddress/:address")
updateAddress(@Param() params): string {
    return "Seller updated address: "+ params.address;
}

@Delete ("/deleteUser/:name/:id")
deleteUser(@Param() params): string {
    return "Seller deleted name: " + params.name + " & id: "+ params.id +" \nSuccessfully deleted...";
}

@Delete ("/deleteProduct/:name/:id")
deleteProduct(@Param('name') productName: string, @Param('id') productId:number): any {
    return "Seller deleted name: " + productName + " & id: " + productId + " \nSuccessfully deleted...";
}

}
