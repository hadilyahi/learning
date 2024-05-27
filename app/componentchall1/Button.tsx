function Button(props:any){
    
  
    
    return(
        <>
        {props.title==null || props.title==""? null :
        <div>
            <button className="bg-pink-700 rounded-md text-white text-xs p-6 hover:bg-pink-400 ">{props.title}</button>
            
        </div>}
        </>
    )
}
export default Button;