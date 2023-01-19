import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import axios from "axios";
import './App.css';
import AddContacts from "./components/addContactsScreen"
import Display from "./components/displayScreen"
import EditContacts from "./components/editContactsScreen"

function App() {

  const [backendData, setBackendData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/contacts")
      .then((response) => {
        const data = response.data;
        setBackendData(data);
        console.log(data, "data is received");
      })
      .catch((error) => {
        console.log(error, "error is received");
      });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={ <Display backendData={ backendData } />} />
      <Route exact path="/form" element={ <AddContacts />} />
      <Route exact path="/edit/:id" element={<EditContacts />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
