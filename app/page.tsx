
import Image from "next/image";
import Head from "./componentchall1/Head";
import Section from "./componentchall1/Section";

import Div from "./componentchall1/Div";
const section= [
  {id:1,Text:"hello world" ,content:"i'am hadil yahi"},
  {id:2,Text:"hello" ,content:"i'am Noucha"},
  {id:3,Text:"hiiiiii" ,content:"i'am khalil"},
  {id:4,Text:" world" ,content:"i'am chihab"},
]

export default function Home() {

  return (
    <>
      
       <Head/>
      <div className="flex justify-evenly">
        <div>
         {section.map((preperis) =>(
            
            <Section key={preperis.id} Text={preperis.Text} content={preperis.content}/>
         ))}
          
        </div>
        <div>
          <Div/>
        </div>
      </div> 
      
    </>
  );
}
