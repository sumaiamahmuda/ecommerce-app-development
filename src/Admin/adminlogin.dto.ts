import{Length,IsInt,validate, Contains, MinLength, MaxLength, IsDate, IsEmail} from 'class-validator';
export class Adminlogin {
       
    @Length(5,10,{message:'name is not valid'})
    name: string;
    password:string;



}
export class Categoryinfo {   
    @IsInt({message:'id must be an enteger'})
    id:number;
    
  @Contains('food',{message:'category name does nor match',})
    cname:string;
    status:string;

}
export class Productinfo {   
    
    id:number;
    @MinLength(10,{message:'name is too short',})
    @MaxLength(20,{message:'name is long',})
    pname:string;
    //@IsDate()
    mrp:number;
    price:number;
    status:string;

}
export class sellerinfo {   
    
    id:number;
    sname:string;
    @IsEmail()
    email:string;
    phn:number;
    address:string;

}


