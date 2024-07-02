
import Image from "next/image";
import Head from "./component/Head";
import Section from "./component/Section";
import Button from "./component/Button";
import axios from 'axios'
import UseState from "./Hooks/UseState";
const section= [
  {id:1,Text:"hello world" ,content:"i'am hadil yahi"},
  {id:2,Text:"hello" ,content:"i'am Noucha"},
]
const buttonTitles = [
  { id:1, title: "Click me"},
  { id:2, title: "Click we" },  
];
 function Home() {

  return (
    <>
      
       <Head/>
      <div className="flex justify-center ">
        <div>
         {section.map((preperis) =>(
            
            <Section key={preperis.id} Text={preperis.Text} content={preperis.content}/>
         ))}
         <div className="flex justify-between mt-8">
              {buttonTitles.map((button) => (
                <Button key={button.id} title={button.title} />
            ))}
         </div>
         <div className="mt-16">
            <UseState/>
         </div>
        </div>
      </div> 
      
    </>
  );
}
export default Home ;