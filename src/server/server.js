const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');


// .env setup
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, 'config.env') });
const PORT = process.env.PORT || 8000

// DB URI
const ATLAS_URI = process.env['ATLAS_URI'];

app.use(cors());
app.use(express.json());

// Connect DB
mongoose.set("strictQuery", false);
mongoose.connect(ATLAS_URI, () => {
    console.log('DB connected');
 });

// Expenses Schema and Model
const Schema = mongoose.Schema;
const expensesSchema = new Schema({
    name: {type: String, require: true},
    amount: {type: Number, require: true},
    date: {type: String, require: true},
    category: {type: String, require: true}
}, 
{collection: 'expenses', versioneKey: false});

// const expenses = mongoose.model('expenses', expensesSchema);

// Users Schema
const usersSchema = new Schema({
    username: String,
    expenses: [expensesSchema]
})
const users = mongoose.model('users', usersSchema);
// login request
app.post('/api/login', async (req, res) => {
    const username = req.body.username;
    if (await users.findOne({username: username})) { 
     const existingUser = await users.findOne({username: username})
     res.json(existingUser.expenses)
     } else {
     const newUser = new users({username: username});
     newUser.save();
    }
})

// post request
app.post('/api/add-expense', async (req, res) =>{
  const {name, amount, date, category, user} = req.body;
	const expense = {name, amount: parseFloat(amount), date, category};
  await users.updateOne({username: user}, {$push: {expenses: [expense]}});
  res.send("success");
});

app.post('/api/expenses',  (req, res) => {
     const user =  req.body.user;
         users.findOne({username: user.user}, (err, exp) => {
        if (err) {
          console.error(err);
        } else {
					if (exp){
          res.json(exp.expenses)
					}
        }
       });
});
// delete request
app.post('/api/delete-expense', async (req, res) =>{
  const {_id, user} = req.body;
	await users.updateOne({username: user}, {$pull: {expenses: {_id}}});
  res.send("delete expense success");
});
// update request
app.post('/api/update-expense', async (req, res) =>{
  const { _id, name, amount, category, date} = req.body;
  await users.updateOne( { "expenses._id": _id },
   {$set: 
    { "expenses.$[xx]" : { name, amount, category, date }}
  }, 
  {
    arrayFilters: [
     { "xx._id" : _id}
    ]}
  );
  res.send("update expense success");
});

app.listen(PORT, () => {
    console.log(`Server is running on port 8000.`);
  }); 