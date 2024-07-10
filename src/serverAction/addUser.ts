"use server"
import { PrismaClient } from '@prisma/client';



export const addUser= async (name:string,age:number,gender:string)=>{

    console.log(name,age,gender)
    const prisma = new PrismaClient();


try {
   const newUser = await prisma.user.create({
        data: {
          name:name,
          age:age,
          gender:gender,
        },
     });

} catch (error) {
    console.log(error)
}  
}