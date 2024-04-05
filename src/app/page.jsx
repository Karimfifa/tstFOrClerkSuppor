import Image from "next/image";
import Mail from "./lib/mail"
import { SignUp } from "@clerk/nextjs";


export default function Home() {

  const send = async()=>{
    "use server"
    await Mail({to:"fifakarim52@gmail.com",name:"ana",subject:"tst",body:`<h1>im karim</h1>`})
  }
  return (
    <div className="flex justify-center items-center bg-blue-500 h-screen">
     
    </div>
  );
}
