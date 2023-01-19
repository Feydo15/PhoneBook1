import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from "axios";


const  EditContacts = (backendData) => {
  
  useEffect(() => {
    loadContacts()
  }, []);
  


  const {id}= useParams();


  const [editData, setEditData] = useState({
  });

const handleSubmit = (e) => {
e.preventDefault();
axios.put(`http://localhost:5000/contacts/${id}`,{
name:editData.name,
number:editData.number,
email:editData.email
}).then(response => {
    console.log(response.editData)
});
}

  const handleChange = (e) => {
    const newData = {...editData}
    newData[e.target.id]=e.target.value;
    setEditData(newData);
    console.log(newData);
  };


  const loadContacts =async () => {
    const result=await axios.get(`http://localhost:5000/contacts/${id}`)
    if(result){
      setEditData(result.data.result);
      console.log(result.data.result)
    }else{
      console.log("No data")
    }
  }


  return (
    <div>
      <h2>Edit Contacts</h2>
      <form action="/contacts" method="put" onSubmit={(e) => handleSubmit(e)}>
        <label for="name"> contact_name</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="name"
          value={editData.name}
          name="name"
          required
        />
        <label for="number">contact_number</label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          id="number"
          value={editData.number}
          name="number"
          required
        />
        <label for="email">contact_emails</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="email"
          value={editData.email}
          name="email"
          required
        />
        <button>Submit</button>
<Link to={"/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default EditContacts;
