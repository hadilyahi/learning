
import Image from "next/image";
import Head from "./component/Head";
import Section from "./component/Section";

import Div from "./component/Div";


export default function Home() {
  return (
    <>
    
      <Head/>
      <div className="flex justify-evenly">
        <div>
          <Section/>
          <Section/>
          <Section/>
          <Section/>
        </div>
        <div>
          <Div/>
        </div>
      </div>
    </>
  );
}
