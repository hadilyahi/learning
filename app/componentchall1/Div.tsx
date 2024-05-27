import { title } from "process";
import Button from "./Button";

const buttonTitles = [
   { id:1, title: "Click me"},
   { id:2, title: "Click me" },
   { id:3, title: "Click me"},
   { id:4, title: "Click me"},   
];
function Div()
{
    
    return(
        <div className="flex gap-2 border-4 mt-10 p-4 ">
            
            {buttonTitles.map((button) => (
                <Button key={button.id} title={button.title} />
            ))}

            

        </div>
    )
}
export default Div;