import React,{ useState } from "react";
import {  useNavigate } from 'react-router-dom';
import axios from "axios";

const AddContacts = () => {

 let navigate = useNavigate();
  const url = "http://localhost:5000/contacts";

  const [formData, setFormData] = useState({});
  
  
  const handleSubmit = (e) => {
e.preventDefault();
axios.post(url,{
  name: formData.name,
  number: formData.number,
  email: formData.email,
}).then(response => {
    console.log(response.formData)
    navigate("/")
    window.location.reload();
});
}

  const handleChange = (e) => {
    const newData = {...formData}
    newData[e.target.id]=e.target.value;
    setFormData(newData);
    console.log(newData);
  };


  return (

<div className="container">
    <form action="/contacts" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <ul>
            <li>
                <label for="name"><span>Firstname</span></label>
                <input type="text" id="name" placeholder="Your name" onChange={(e) => handleChange(e)} name="user_name" />
            </li>
            <li>
                <label for="email"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="email" placeholder="Your email" onChange={(e) => handleChange(e)} name="email" />
            </li>
            <li>
             <label for="number"><span>Phone Number <span class="required-star">*</span></span></label>
             <input type="number" id="number"  placeholder="+2784 788 2345" onChange={(e) => handleChange(e)} name="number" />
            </li>
            <li>
              <button type="submit">Save Details</button>
              <button className="cancel" onClick={navigate("/")
              }>Cancel</button>
            </li>
        </ul>
    </form>
</div>





  );
}

export default AddContacts;
