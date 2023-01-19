const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contacts = require("./models/contacts")
const bodyParser = require("body-parser")



// express app

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

const dbURI =
  "mongodb+srv://feydo:feyDo1234@node1.00lrnk3.mongodb.net/phone_book?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => app.listen(5000),
    console.log("connect success and listening on port 5000")
  )
  .catch((err) => console.log(err));




// endpoints

  app.get('/contacts', function (req, res) {
    let contacts =  Contacts.find({}, function(err, contacts){
        if(err){
            console.log(err);
        }
        else {
            res.json(contacts);
        }
    });
});



app.post("/contacts", async (req, res) => {
    try {
      const contact = new Contacts(req.body);
      console.log(contact)
      contact.save();
      res.send(contact)
    } catch (error) {
      res.status(400).send(error);
    }
  });


app.get("/contacts/:id", (req, res) => {
  let id = req.params.id;
  Contacts.findById(id)
    .then( result => {
      res.send({result});
      console.log({result})
    })
    .catch( err => {
      console.log(err);
    });
});

app.delete("/contacts/:id", async (req, res) => {
  try {
   const _id = req.params.id;
   const result = await Contacts.findByIdAndDelete(_id);
   if(result){
     res.send({
       status: "SUCCESS",
       message: "Contacts is Deleted successfully..."
     })
   }else{
     res.send({
       status: "FAILED",
       message: "Contacts not Deleted successfully..."
     })
   }
   } catch (error) {
     res.status(400).send(error);
  }
 });
 


 app.put("/contacts/:id", async (req, res) => {
  try {
   const _id = req.params.id;
   const result = await Contacts.findByIdAndUpdate(_id, {  name: req.body.name, number: req.body.number, email: req.body.email});
   if(result){
     res.send({
       status: "SUCCESS",
       message: "Contacts is updated successfully..."
      })
      return
      contacts.save();
   }else{
     res.send({
       status: "FAILED",
       message: "Contacts not updated successfully..."
     })
     return
   }
   } catch (error) {
     res.status(400).send(error);
     return
  }
 });
 