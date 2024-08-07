
interface IAdress{
    city:string,
    street:string,
    zip:string

}


export interface IUser{
    id:number,
    name:string,
    email:string,
    adress:IAdress,
    phone:string

}
