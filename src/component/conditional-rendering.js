import { useState } from "react";

const Conditional = () =>{
    const [login, setlogin] = useState(false)

    function loginhandler (){
        setlogin(true)
    }

    function logouthandler (){
        setlogin(false)
    }
    return(
        <>
        <h1>I am conditional rendring compo</h1>
        <div>
            {
                login ? ( 
                <>
                <h3>I am true component</h3>
                <button onClick={logouthandler}>Login</button>
                </> 
                ) :( 
                <>
                <h3>I am false component</h3>
                <button onClick={loginhandler}>logout</button>
                </>
                )
            }
           
        </div>
        </>
    )
}
export default  Conditional;