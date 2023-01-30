import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {  Link } from 'react-router-dom';



function Display(backendData) {

  let navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    navigate("/edit/:id");
  }


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

const Change = () => {
  const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

return colors[Math.floor(Math.random() * colors.length)]
}




    let contacts = backendData;
    console.log(backendData , "contacts")
  
 return (
  <div className="containe2 md-table-template">
    <Link
    to={"/form"}
    ><button>ADD</button></Link>

<div className="table">
<table style={{width: 100}}>
  <tr className="md-table-headers-row">
  <th className="md-table-header">Contacts Name</th>
 <th className="md-table-header">Contacts Number</th>
 <th className="md-table-header">Contacts Email</th>
 <th className="md-table-header">Edit</th>
 <th className="md-table-header">Delete</th>
  </tr>
  {contacts.backendData.map((item) => (
  <tr key={item._id}>
    <td><div className="initial" style={{backgroundColor: Change()}}>{item.name.charAt(0).toUpperCase()}</div>{item.name}</td>
    <td>{item.number}</td>
    <td>{item.email}</td>
    <td>
    <button className="btn btn-primary">
      <Link
      className="edit"
      to={`/edit/${item._id}`}
      >Edit</Link>
      </button>
    </td>
    <td><button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button></td>
  </tr>  
))
}
</table>
</div>
      </div>
    );
  }
  
  export default Display;
  