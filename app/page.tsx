
import Image from "next/image";
import Head from "./componentchall1/Head";
import Section from "./componentchall1/Section";

import Div from "./componentchall1/Div";


export default function Home() {
  return (
    <>
      
       <Head/>
      <div className="flex justify-evenly">
        <div>
          <Section Text="hello world" content="i'am hadil yahi"/>
          <Section Text="Hi noucha" content="hi i'am nocha sister of hadil"/>
          <Section />
          <Section/>
        </div>
        <div>
          <Div/>
        </div>
      </div> 
      
    </>
  );
}
