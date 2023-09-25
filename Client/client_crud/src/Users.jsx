import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Users() {
    const[users, setUsers] = useState([])
    useEffect(()=>{
axios.get("http://localhost:5000")
.then(result => setUsers(result.data))
.catch(err => console.log(err))
    },[])

    const handleDelete= (id) => {
      axios.delete('http://localhost:5000/deleteUser/'+id)
     .then(res =>{ console.log(res)
    window.location.reload()
    })
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add</Link>
<table className='table'>
    <thead>
       <th>Name</th>
       <th>Email</th>
       <th>age</th>
       <th>Action</th>
    </thead>
<tbody>{
    users.map((user)=>{
       //if we use array we don't use return,  but if we use curly braces we want use curly braces.
return <tr>              
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.age}</td>
    <td>
    <Link to={`update/${user._id}`} className='btn btn-success'>Edit</Link>  
     <button className='btn btn-danger' onClick={(e) => handleDelete(user._id)}>Delete</button></td>
</tr>
    })
    }
    
</tbody>
</table>
      </div>
    </div>
  )
}

export default Users
