import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const AddContacts = () => {

  const url = "http://localhost:5000/contacts";

  const [formData, setFormData] = useState({});
  
  
  const handleSubmit = (e) => {
e.preventDefault();
axios.post(url,{
  name: formData.name,
  number: formData.number,
  emails: formData.emails,
}).then(response => {
    console.log(response.formData)
});
}

  const handleChange = (e) => {
    const newData = {...formData}
    newData[e.target.id]=e.target.value;
    setFormData(newData);
    console.log(newData);
  };


  return (
    <div>
      <h2>Add Contacts</h2>
      <form action="/contacts" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <label for="name">contact_name:</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="name"
          value={formData.name}
          name="name"
          required
        />
        <label for="number">contact_number</label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          id="number"
          value={formData.number}
          name="number"
          required
        />
        <label for="email">contact_email</label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          id="email"
          value={formData.email}
          name="email"
          required
        />
        <button>Submit</button>
        <Link to={"/"}>Cancel</Link>
      </form>
    </div>
  );
}

export default AddContacts;
