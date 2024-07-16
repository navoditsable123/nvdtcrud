import { useState } from "react";

const Stulogin = () =>{
    const [login, setlogin] = useState(false)

    function loginhandler (){
        setlogin(!login)
    }

  
    return(
        <>
       <div>
         <h1>Lerning Conditional rendring</h1>
         {
            login ? <h3>I am true..</h3> : <h3>i am false..</h3>     
         }
          <button onClick={loginhandler}>Login</button>
          
       </div>
        </>
    )
}
export default  Stulogin;