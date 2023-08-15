

const Header =(props)=>
{
    return(
        <> 
        <head>
        
        <title >{props.title}</title>
        <meta name="description" content={props.description}/>   
       
        
        </head>
       </>
       
    )
}

export default Header