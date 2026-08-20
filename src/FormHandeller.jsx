import React, { useState } from 'react'
import './index.css'
const FormHandeller = () => {

const [fname, setfname] = useState("")
const [lname, setlname] = useState("")
const [uname, setuname] = useState("")
const [mail, setmail] = useState("")
const [pass, setpass] = useState("")
const [number, setnumber] = useState("")
const [date, setdate] = useState("")
const [address, setaddress] = useState("")
const [file, setfile] = useState("")
const [check, setcheck] = useState("")

const Handeller= (e) =>{
        e.preventDefault()
}
  return (
    <div>
        <h2>FormHandeller</h2>
        <form onSubmit={Handeller}>
        <label htmlFor='firstname' >First Name: </label>
        <input type="text" id="firstname" value={fname} onChange={(e)=> setfname(e.target.value)} />
        <label htmlFor='lastname' >Last Name: </label>
        <input type="text" id="lastname" value={lname} onChange={(e)=> setlname(e.target.value)}/>
        <br/>
        <label htmlFor="uname">Username: </label>
        <input type="text" id="uname" value={uname} onChange={(e)=> setuname(e.target.value)}/>
        <br/>
        <label htmlFor='mail'>Email : </label>
        <input type="email" id='mail' value={mail} onChange={(e)=> setmail(e.target.value)}/> 
        <br/>
        <label htmlFor='pass'>Password : </label>
        <input type="password" id='pass' value={pass} onChange={(e)=> setpass(e.target.value)}/> 
        <br/>
        <label htmlFor='number'>Number : </label>
        <input type="number" id='mail' value={number} onChange={(e)=> setnumber(e.target.value)}/> 
        <br/>
        <label htmlFor='date'>Date : </label>
        <input type="date" id='date' value={date} onChange={(e)=> setdate(e.target.value)}/> 
        <br/>
        <label htmlFor='address'>Address : </label>
        <input type="text" id='address' value={address} onChange={(e)=> setaddress(e.target.value)}/> 
        <br/>
        <label htmlFor='img'>Image : </label>
        <input type="file" id='img' value={file} onChange={(e)=> setfile(e.target.value)}/> 
        <br/>
        <label htmlFor='check'>CheckBox : </label>
        <input type="checkbox" id='check' value={check} onChange={(e)=>setcheck(e.target.value)}/> 
        {console.log(check)}
        <br/>
            <input type="submit" value="Submit" />
    </form>    

    <div>
        <h2>Report</h2>
        <p>Name: {fname} {lname}</p>
        <p>Email: {mail}</p>
        <p>Number: {number}</p>
        <p>Address: {address}</p>
        <p>UserName: {uname}</p>
        <p>Date: {date}</p>
        <p>Check: {check}</p>
    </div>
    </div>
  )
}

export default FormHandeller