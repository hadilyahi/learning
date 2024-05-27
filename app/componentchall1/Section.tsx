function Section(props:any){
    return(
        <div className="border-emerald-700 w-60 border-4 flex flex-col  mt-10 h-32 ">
            <h1 className="flex justify-center border p-6 items-center">{props.Text}</h1>
            
            <p className="flex justify-center mt-4  text-sm items-center">{props.content}</p>
        </div>
    )
}
export default Section;