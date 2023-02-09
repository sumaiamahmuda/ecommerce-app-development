import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ModeratorService } from "./moderator.service";

@Controller("/moderator")
export class ModeratorController {

    constructor(private moderatorService: ModeratorService){}

    @Get()
    indexPath(): any {
        return "This is the default path for ./moderation module";
    }

    @Get("/index")
    index(): any {
        return this.moderatorService.getIndex();
    }

    @Get("/getbyname/:name")
    getByName(@Param() obj): string {
        return "Moderator name is " + obj.name + " get by URL input!";
    }

    @Get("/getbyall/:name/:id")
    getByAll(@Param() obj): string {
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " get by URL input!";
    }

    @Post("/register/:name/:id/:username/:password")
    register(@Param() obj): string {
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " register!";
    }

    @Post("/login/:username/:password")
    login(@Param() obj): string {
        return "Moderator username is " + obj.username + " and password: "+ obj.password + " login!";
    }

    @Put("/addModerator")
    addModerator(
        @Body("name") name:string,
        @Body("id") id:string,
        @Body("username") username:string,
        @Body("password") password:string
    ){
        return "Moderator name is " + name + " and ID: "+ id + " and username: "+ username + " and password: "+ password + " add!";
    }

    @Post("/searchModeratorByName")
    searchModerator(@Body("name") name:string): any {
        return "Search by Moderator by name: "+ name;
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
    //here id is undefined! Why?

    @Get("/getaModerator")
    getAllUsers(@Query() qry:any): any {
        return "name; " + qry.name + " id: " + qry.id;
    }



}

    

