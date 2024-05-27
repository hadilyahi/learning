import Button from "./Button";

const buttonTitles = ["Click me", "Submit", "Cancel" ,"hello ","yahihaidil"];
function Div()
{
    
    return(
        <div className="flex gap-2 border-4 mt-10 p-4 ">
            
            {buttonTitles.map((title, index) => (
                <Button key={index} title={title} />
            ))}

            

        </div>
    )
}
export default Div;