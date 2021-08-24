import React, { useState } from 'react'

const AppForm =()=>{
    // const [name , setName]=useState()
     const [Fullname , setFullname]=useState()
     const [Lastname , setLastname]=useState()
     const [Mobile , setMobile]=useState()
     const [Password , setPassword]=useState()      
     const FirstName=(event)=>{
        console.log(event.target.value)
        setFullname(event.target.value)
    }
    const Lname=(event)=>{
        setLastname(event.target.value)
    }
    const inputMobile=(event)=>{
        setMobile(event.target.value)
    }
    const inputPassword=(event)=>{
        setPassword(event.target.value)
    }
    const onSubmits=(e)=>{
         e.preventDefault()
        setFullname(Fullname)
        setLastname(Lastname)
        setMobile(Mobile)
        setPassword(Password)
    }
    return(
    <> 
    <div>
    <form onSubmit={onSubmits}>
    <h1>hello {Fullname} {Lastname}</h1>
    <input type="text" placeholder="enter your name" onChange={FirstName} value={Fullname}/>
    <input type="text" placeholder="enter your last name" onChange={Lname} value={Lastname}/>
    <input type="text" placeholder="enter your mobile number" onChange={inputMobile} value={Mobile}/>
    <input type="password" placeholder="enter your password" onChange={inputPassword} value={Password}/>
    <br />
    <button  type="submit"> login </button>
    </form>
    </div>
    </>

    )
}
export default AppForm;