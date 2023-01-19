import React from "react";
import axios from "axios";
import {  Link } from 'react-router-dom';



function Display(backendData) {


  const handleDelete = (id) => {
    const url = `http://localhost:5000/contacts/${id}`
     axios.delete(url)
     .then(response => {
      const result = response.data;
      const { status, message } = result;
      if (status !== 'SUCCESS') {
          alert(message, status)
      }
      else {
          alert(message)
          window.location.reload()
      }
  })
  .catch(err => {
      console.log(err)
  })
 }



    let contacts = backendData;
    console.log(backendData , "contacts")
  
 return (
  <div>
    <Link
    to={"/form"}
    ><button>ADD</button></Link>
<table style={{width: 100}}>
  <tr>
  <th>Contacts Name</th>
 <th>Contacts Number</th>
 <th>Contacts Email</th>
 <th>Edit</th>
 <th>Delete</th>
  </tr>
  {contacts.backendData.map((item) => (
  <tr key={item._id}>
    <td>{item.name}</td>
    <td>{item.number}</td>
    <td>{item.email}</td>
    <td><Link
      to={`/edit/${item._id}`}
    >Edit</Link></td>
    <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
  </tr>  
))
}
</table>
      </div>
    );
  }
  
  export default Display;
  