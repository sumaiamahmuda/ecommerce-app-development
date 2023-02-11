import { Injectable } from "@nestjs/common";

@Injectable()
export class ModeratorService {

    defaultPath(): any{
        return "This is the default path for ./moderation module";
    }

    getIndex():any { 
        return "Hello World";
    }

    getByName(name:object):any {
        return "Moderator name is " + name + " get by URL input!";
    }

    getByAll(obj):any {
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " get by URL input!";
    }

    registerUrl(obj):any{
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " register!";
    }

    loginUrl(obj): any{
        return "Moderator username is " + obj.username + " and password: "+ obj.password + " login!";
    }

    regesterByBody(obj): any{
        return "Moderator name is " + obj.name + " and ID: "+ obj.id + " and username: "+ obj.username + " and password: "+ obj.password + " added!";
    }

    // searchModeratorByNameBody(obj): any{
    //     return "Search by Moderator by name: "+ obj.name;
    // }

    searchById(id):any{
        return "Search by Moderator by Id: "+ id;
    }


}