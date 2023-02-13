import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";
import { ModeratorDTO } from "./moderator.dto";

@Controller("/moderator")
export class ModeratorController {

    constructor(private moderatorService: ModeratorService){}

    @Get()
    indexPath(): any {
        return this.moderatorService.defaultPath();
    }

    @Get("/index")
    index(): any {
        return this.moderatorService.getIndex();
    }

    @Post("/searchModeratorById")
    searchModeratorById(@Body("id") id:string): any {
        return "Search by Moderator by id: "+ id;
    }

    @Delete("/deleteById")
    deleteById(@Body("id") id:string): any {
        return "Delete by Moderator by id: "+ id;
    }

    @Get("/delete")
    getUserByIDName(@Query() qry:any): any {
      return "Deleted" + qry.name;
    }  

    @Get("/getaModerator")
    getAllUsers(@Query() qry:any): any {
        return "name; " + qry.name + " id: " + qry.id;
    }

    @Post("/registerUrl/:name/:id/:username/:password")
    registerUrl(@Param() obj): string {
        return this.moderatorService.registerUrl(obj);
    }

    @Post("/login/:username/:password")
    login(@Param() obj): string {
        return this.moderatorService.loginUrl(obj);
    }

    @Put("/addModeratorBody")
    addModerator(
        @Body("name") name:string,
        @Body("id") id:string,
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return this.moderatorService.regesterByBody(Object);
    }

    @Get("/getbyname/:name")
    getByName(@Param() obj): string {
        return this.moderatorService.getByName(obj.name);
    }

    @Get("/getbyall/:name/:id")
    getByAll(@Param() obj): string {
        return this.moderatorService.getByAll(obj);
    }


    //transformation lab-2
    //practice for transformation

    @Get("/search/:id")
    searchById(@Param('id', ParseIntPipe) id:number){
        return this.moderatorService.searchById(id);
    }

    @Get("/register/readAgreement")
    readTurmsAndConditions(@Query ('read', ParseBoolPipe)read?:boolean){
        return this.moderatorService.readTurmsAndConditions(read);
    }
    
    @Post("/register")
    @UsePipes(new ValidationPipe())
    register(@Body() moderatorDTO: ModeratorDTO): any{
        return this.moderatorService.register(moderatorDTO);
    }

    







}

    

