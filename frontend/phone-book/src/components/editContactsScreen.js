import React, { useState, useEffect } from "react";
import { useParams,  useNavigate } from 'react-router-dom';
import axios from "axios";


const  EditContacts = (backendData) => {
  
  useEffect(() => {
    loadContacts()
  }, []);
  


  const {id}= useParams();

  let navigate = useNavigate();
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
    navigate("/")
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

<div className="container">
    <form action="/contacts" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <ul>
            <li>
                <label for="name"><span>Firstname</span></label>
                <input type="text" id="name" placeholder="Your name"  value={editData.name} onChange={(e) => handleChange(e)} name="user_name" />
            </li>
            <li>
                <label for="email"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="email" placeholder="Your email" value={editData.email} onChange={(e) => handleChange(e)} name="email" />
            </li>
            <li>
             <label for="number"><span>Phone Number <span class="required-star">*</span></span></label>
             <input type="number" id="number"  placeholder="+2784 788 2345"  value={editData.number} onChange={(e) => handleChange(e)} name="number" />
            </li>
            <li>
              <button type="submit">Save Details</button>
              <button className="cancel" onClick={navigate("/")}>Cancel</button>
            </li>
        </ul>
    </form>
</div>
 );
}

export default EditContacts;
