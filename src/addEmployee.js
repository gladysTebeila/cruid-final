import React, {useState} from "react"
import "./adding.css"
function AddEmployee(props){

    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')

    const add=(()=>{
        props.add(id, name, surname, email);
    })

    return(
        <div className="container">

            <h1 style={{paddingLeft: "5px"}}>New Employee</h1>
            <p>ID</p>
            <input type="text" placeholder="Enter ID" onChange={(e)=>setID(e.target.value)} />
            <p>First Name</p>
            <input type="text" placeholder="Enter your first names" onChange={(e)=>setName(e.target.value)} />
            <p>Last Name</p>
            <input type="text" placeholder="Enter your last name" onChange={(e)=>setSurname(e.target.value)} />
            <p>Email</p>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br></br>

            <button className="btn" onClick={add}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;